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
import { GoogleCloudIntegrationsV1alphaParameterMapEntry } from "./googlecloudintegrationsv1alphaparametermapentry";
export var GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum;
(function (GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum) {
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["IntegrationParameterDataTypeUnspecified"] = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["StringValue"] = "STRING_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["IntValue"] = "INT_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["StringArray"] = "STRING_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["IntArray"] = "INT_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["JsonValue"] = "JSON_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["ProtoValue"] = "PROTO_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum["ProtoArray"] = "PROTO_ARRAY";
})(GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum || (GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum = {}));
export var GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum;
(function (GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum) {
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["IntegrationParameterDataTypeUnspecified"] = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["StringValue"] = "STRING_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["IntValue"] = "INT_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["StringArray"] = "STRING_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["IntArray"] = "INT_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["JsonValue"] = "JSON_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["ProtoValue"] = "PROTO_VALUE";
    GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum["ProtoArray"] = "PROTO_ARRAY";
})(GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum || (GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaParameterMap
/**
 * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
**/
var GoogleCloudIntegrationsV1alphaParameterMap = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaParameterMap, _super);
    function GoogleCloudIntegrationsV1alphaParameterMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudIntegrationsV1alphaParameterMapEntry }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaParameterMap.prototype, "entries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaParameterMap.prototype, "keyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaParameterMap.prototype, "valueType", void 0);
    return GoogleCloudIntegrationsV1alphaParameterMap;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaParameterMap };
