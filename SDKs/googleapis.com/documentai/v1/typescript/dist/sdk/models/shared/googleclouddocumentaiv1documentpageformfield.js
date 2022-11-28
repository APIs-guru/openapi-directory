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
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
// GoogleCloudDocumentaiV1DocumentPageFormField
/**
 * A form field detected on the page.
**/
var GoogleCloudDocumentaiV1DocumentPageFormField = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentPageFormField, _super);
    function GoogleCloudDocumentaiV1DocumentPageFormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedKeyText" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "correctedKeyText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedValueText" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "correctedValueText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageLayout)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "fieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldValue" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageLayout)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "fieldValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameDetectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "nameDetectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentProvenance)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueDetectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "valueDetectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentPageFormField.prototype, "valueType", void 0);
    return GoogleCloudDocumentaiV1DocumentPageFormField;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentPageFormField };
