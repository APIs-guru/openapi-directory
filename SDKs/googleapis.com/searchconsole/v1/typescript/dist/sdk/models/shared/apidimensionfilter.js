var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var ApiDimensionFilterDimensionEnum;
(function (ApiDimensionFilterDimensionEnum) {
    ApiDimensionFilterDimensionEnum["Query"] = "QUERY";
    ApiDimensionFilterDimensionEnum["Page"] = "PAGE";
    ApiDimensionFilterDimensionEnum["Country"] = "COUNTRY";
    ApiDimensionFilterDimensionEnum["Device"] = "DEVICE";
    ApiDimensionFilterDimensionEnum["SearchAppearance"] = "SEARCH_APPEARANCE";
})(ApiDimensionFilterDimensionEnum || (ApiDimensionFilterDimensionEnum = {}));
export var ApiDimensionFilterOperatorEnum;
(function (ApiDimensionFilterOperatorEnum) {
    ApiDimensionFilterOperatorEnum["Equals"] = "EQUALS";
    ApiDimensionFilterOperatorEnum["NotEquals"] = "NOT_EQUALS";
    ApiDimensionFilterOperatorEnum["Contains"] = "CONTAINS";
    ApiDimensionFilterOperatorEnum["NotContains"] = "NOT_CONTAINS";
    ApiDimensionFilterOperatorEnum["IncludingRegex"] = "INCLUDING_REGEX";
    ApiDimensionFilterOperatorEnum["ExcludingRegex"] = "EXCLUDING_REGEX";
})(ApiDimensionFilterOperatorEnum || (ApiDimensionFilterOperatorEnum = {}));
// ApiDimensionFilter
/**
 * A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.
**/
var ApiDimensionFilter = /** @class */ (function (_super) {
    __extends(ApiDimensionFilter, _super);
    function ApiDimensionFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], ApiDimensionFilter.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expression" }),
        __metadata("design:type", String)
    ], ApiDimensionFilter.prototype, "expression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], ApiDimensionFilter.prototype, "operator", void 0);
    return ApiDimensionFilter;
}(SpeakeasyBase));
export { ApiDimensionFilter };
