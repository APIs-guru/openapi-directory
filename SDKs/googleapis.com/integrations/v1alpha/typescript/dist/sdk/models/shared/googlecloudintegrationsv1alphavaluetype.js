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
import { GoogleCloudIntegrationsV1alphaBooleanParameterArray } from "./googlecloudintegrationsv1alphabooleanparameterarray";
import { GoogleCloudIntegrationsV1alphaDoubleParameterArray } from "./googlecloudintegrationsv1alphadoubleparameterarray";
import { GoogleCloudIntegrationsV1alphaIntParameterArray } from "./googlecloudintegrationsv1alphaintparameterarray";
import { GoogleCloudIntegrationsV1alphaStringParameterArray } from "./googlecloudintegrationsv1alphastringparameterarray";
// GoogleCloudIntegrationsV1alphaValueType
/**
 * The type of the parameter.
**/
var GoogleCloudIntegrationsV1alphaValueType = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaValueType, _super);
    function GoogleCloudIntegrationsV1alphaValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanArray" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaBooleanParameterArray)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "booleanArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanValue" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "booleanValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleArray" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaDoubleParameterArray)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "doubleArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", Number)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intArray" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaIntParameterArray)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "intArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonValue" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "jsonValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringArray" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaStringParameterArray)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "stringArray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaValueType.prototype, "stringValue", void 0);
    return GoogleCloudIntegrationsV1alphaValueType;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaValueType };
