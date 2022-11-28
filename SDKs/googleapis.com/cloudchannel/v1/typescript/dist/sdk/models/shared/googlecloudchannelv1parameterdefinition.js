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
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
export var GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum;
(function (GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum) {
    GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum["ParameterTypeUnspecified"] = "PARAMETER_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum["Int64"] = "INT64";
    GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum["String"] = "STRING";
    GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum["Double"] = "DOUBLE";
})(GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum || (GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum = {}));
// GoogleCloudChannelV1ParameterDefinition
/**
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
**/
var GoogleCloudChannelV1ParameterDefinition = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ParameterDefinition, _super);
    function GoogleCloudChannelV1ParameterDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedValues", elemType: GoogleCloudChannelV1Value }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "allowedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", GoogleCloudChannelV1Value)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", GoogleCloudChannelV1Value)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optional" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "optional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ParameterDefinition.prototype, "parameterType", void 0);
    return GoogleCloudChannelV1ParameterDefinition;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ParameterDefinition };
