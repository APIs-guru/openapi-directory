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
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
export var GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["IntegrationParameterDataTypeUnspecified"] = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["StringValue"] = "STRING_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["IntValue"] = "INT_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["StringArray"] = "STRING_ARRAY";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["IntArray"] = "INT_ARRAY";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["JsonValue"] = "JSON_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["ProtoValue"] = "PROTO_VALUE";
    GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum["ProtoArray"] = "PROTO_ARRAY";
})(GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum || (GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum["InOutTypeUnspecified"] = "IN_OUT_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum["In"] = "IN";
    GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum["Out"] = "OUT";
    GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum["InOut"] = "IN_OUT";
})(GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum || (GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaIntegrationParameter
/**
 * Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
**/
var GoogleCloudIntegrationsV1alphaIntegrationParameter = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationParameter, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaValueType)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputOutputType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "inputOutputType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTransient" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "isTransient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonSchema" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "jsonSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producer" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "producer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchable" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaIntegrationParameter.prototype, "searchable", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationParameter;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationParameter };
