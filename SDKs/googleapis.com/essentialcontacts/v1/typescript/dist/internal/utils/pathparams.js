export var ppMetadataKey = "pathParam";
export function GetSimplePathParams(paramName, paramValue, explode) {
    var pathParams = new Map();
    var ppVals = [];
    if (Array.isArray(paramValue)) {
        paramValue.forEach(function (param) {
            ppVals.push(String(param));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else if (paramValue instanceof Map) {
        paramValue.forEach(function (paramVal, paramName) {
            if (explode)
                ppVals.push("".concat(paramName, "=").concat(paramVal));
            else
                ppVals.push("".concat(paramName, ",").concat(paramVal));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else if (paramValue instanceof Object) {
        Object.getOwnPropertyNames(paramValue).forEach(function (paramName) {
            var paramFieldValue = paramValue[paramName];
            if (isEmpty(paramFieldValue))
                return;
            else if (explode)
                ppVals.push("".concat(paramName, "=").concat(paramFieldValue));
            else
                ppVals.push("".concat(paramName, ",").concat(paramFieldValue));
        });
        pathParams.set(paramName, ppVals.join(","));
    }
    else {
        pathParams.set(paramName, String(paramValue));
    }
    return pathParams;
}
function isEmpty(value) {
    // check for undefined, null, and NaN
    var res = false;
    if (typeof value === 'number')
        res = Number.isNaN(value);
    else if (typeof value === 'string')
        res = value === "";
    return res || value == null;
}
var ParamDecorator = /** @class */ (function () {
    function ParamDecorator(Style, Explode, ParamName, Serialization) {
        this.Style = Style;
        this.Explode = Explode;
        this.ParamName = ParamName;
        this.Serialization = Serialization;
    }
    return ParamDecorator;
}());
export { ParamDecorator };
