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
// GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata
/**
 * Specifies the FHIR paths to match and how to handle the de-identification of matching fields.
**/
var GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata = /** @class */ (function (_super) {
    __extends(GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata, _super);
    function GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=characterMaskField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "characterMaskField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleanTextField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "cleanTextField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoHashField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "cryptoHashField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateShiftField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "dateShiftField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keepField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "keepField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paths" }),
        __metadata("design:type", Array)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeField" }),
        __metadata("design:type", Map)
    ], GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.prototype, "removeField", void 0);
    return GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata;
}(SpeakeasyBase));
export { GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata };
