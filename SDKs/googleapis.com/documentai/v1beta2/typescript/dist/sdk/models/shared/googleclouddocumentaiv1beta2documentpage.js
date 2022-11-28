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
import { GoogleCloudDocumentaiV1beta2DocumentPageBlock } from "./googleclouddocumentaiv1beta2documentpageblock";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta2documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageDimension } from "./googleclouddocumentaiv1beta2documentpagedimension";
import { GoogleCloudDocumentaiV1beta2DocumentPageFormField } from "./googleclouddocumentaiv1beta2documentpageformfield";
import { GoogleCloudDocumentaiV1beta2DocumentPageImage } from "./googleclouddocumentaiv1beta2documentpageimage";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta2documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageLine } from "./googleclouddocumentaiv1beta2documentpageline";
import { GoogleCloudDocumentaiV1beta2DocumentPageParagraph } from "./googleclouddocumentaiv1beta2documentpageparagraph";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentPageSymbol } from "./googleclouddocumentaiv1beta2documentpagesymbol";
import { GoogleCloudDocumentaiV1beta2DocumentPageTable } from "./googleclouddocumentaiv1beta2documentpagetable";
import { GoogleCloudDocumentaiV1beta2DocumentPageToken } from "./googleclouddocumentaiv1beta2documentpagetoken";
import { GoogleCloudDocumentaiV1beta2DocumentPageMatrix } from "./googleclouddocumentaiv1beta2documentpagematrix";
import { GoogleCloudDocumentaiV1beta2DocumentPageVisualElement } from "./googleclouddocumentaiv1beta2documentpagevisualelement";
// GoogleCloudDocumentaiV1beta2DocumentPage
/**
 * A page in a Document.
**/
var GoogleCloudDocumentaiV1beta2DocumentPage = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2DocumentPage, _super);
    function GoogleCloudDocumentaiV1beta2DocumentPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1beta2DocumentPageBlock }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "blocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "detectedBarcodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "detectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentPageDimension)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1beta2DocumentPageFormField }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "formFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentPageImage)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageQualityScores" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "imageQualityScores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentPageLayout)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1beta2DocumentPageLine }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "pageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1beta2DocumentPageParagraph }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "paragraphs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2DocumentProvenance)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1beta2DocumentPageSymbol }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "symbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1beta2DocumentPageTable }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "tables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1beta2DocumentPageToken }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "tokens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1beta2DocumentPageMatrix }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "transforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1beta2DocumentPage.prototype, "visualElements", void 0);
    return GoogleCloudDocumentaiV1beta2DocumentPage;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2DocumentPage };
