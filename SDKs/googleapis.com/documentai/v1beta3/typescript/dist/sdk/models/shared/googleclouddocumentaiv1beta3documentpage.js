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
import { GoogleCloudDocumentaiV1beta3DocumentPageBlock } from "./googleclouddocumentaiv1beta3documentpageblock";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta3documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageDimension } from "./googleclouddocumentaiv1beta3documentpagedimension";
import { GoogleCloudDocumentaiV1beta3DocumentPageFormField } from "./googleclouddocumentaiv1beta3documentpageformfield";
import { GoogleCloudDocumentaiV1beta3DocumentPageImage } from "./googleclouddocumentaiv1beta3documentpageimage";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta3documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageLine } from "./googleclouddocumentaiv1beta3documentpageline";
import { GoogleCloudDocumentaiV1beta3DocumentPageParagraph } from "./googleclouddocumentaiv1beta3documentpageparagraph";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentPageSymbol } from "./googleclouddocumentaiv1beta3documentpagesymbol";
import { GoogleCloudDocumentaiV1beta3DocumentPageTable } from "./googleclouddocumentaiv1beta3documentpagetable";
import { GoogleCloudDocumentaiV1beta3DocumentPageToken } from "./googleclouddocumentaiv1beta3documentpagetoken";
import { GoogleCloudDocumentaiV1beta3DocumentPageMatrix } from "./googleclouddocumentaiv1beta3documentpagematrix";
import { GoogleCloudDocumentaiV1beta3DocumentPageVisualElement } from "./googleclouddocumentaiv1beta3documentpagevisualelement";
// GoogleCloudDocumentaiV1beta3DocumentPage
/**
 * A page in a Document.
**/
var GoogleCloudDocumentaiV1beta3DocumentPage = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3DocumentPage, _super);
    function GoogleCloudDocumentaiV1beta3DocumentPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1beta3DocumentPageBlock }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "blocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "detectedBarcodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "detectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentPageDimension)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1beta3DocumentPageFormField }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "formFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentPageImage)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageQualityScores" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "imageQualityScores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentPageLayout)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1beta3DocumentPageLine }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "pageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1beta3DocumentPageParagraph }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "paragraphs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3DocumentProvenance)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1beta3DocumentPageSymbol }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "symbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1beta3DocumentPageTable }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "tables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1beta3DocumentPageToken }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "tokens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1beta3DocumentPageMatrix }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "transforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta3DocumentPage.prototype, "visualElements", void 0);
    return GoogleCloudDocumentaiV1beta3DocumentPage;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3DocumentPage };
