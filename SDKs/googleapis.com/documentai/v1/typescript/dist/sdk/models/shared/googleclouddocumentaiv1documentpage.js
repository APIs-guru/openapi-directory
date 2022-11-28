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
import { GoogleCloudDocumentaiV1DocumentPageBlock } from "./googleclouddocumentaiv1documentpageblock";
import { GoogleCloudDocumentaiV1DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageDimension } from "./googleclouddocumentaiv1documentpagedimension";
import { GoogleCloudDocumentaiV1DocumentPageFormField } from "./googleclouddocumentaiv1documentpageformfield";
import { GoogleCloudDocumentaiV1DocumentPageImage } from "./googleclouddocumentaiv1documentpageimage";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScores } from "./googleclouddocumentaiv1documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageLine } from "./googleclouddocumentaiv1documentpageline";
import { GoogleCloudDocumentaiV1DocumentPageParagraph } from "./googleclouddocumentaiv1documentpageparagraph";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentPageSymbol } from "./googleclouddocumentaiv1documentpagesymbol";
import { GoogleCloudDocumentaiV1DocumentPageTable } from "./googleclouddocumentaiv1documentpagetable";
import { GoogleCloudDocumentaiV1DocumentPageToken } from "./googleclouddocumentaiv1documentpagetoken";
import { GoogleCloudDocumentaiV1DocumentPageMatrix } from "./googleclouddocumentaiv1documentpagematrix";
import { GoogleCloudDocumentaiV1DocumentPageVisualElement } from "./googleclouddocumentaiv1documentpagevisualelement";
// GoogleCloudDocumentaiV1DocumentPage
/**
 * A page in a Document.
**/
var GoogleCloudDocumentaiV1DocumentPage = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentPage, _super);
    function GoogleCloudDocumentaiV1DocumentPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudDocumentaiV1DocumentPageBlock }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "blocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedBarcodes", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "detectedBarcodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "detectedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageDimension)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formFields", elemType: GoogleCloudDocumentaiV1DocumentPageFormField }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "formFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageImage)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageQualityScores" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageImageQualityScores)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "imageQualityScores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layout" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentPageLayout)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "layout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lines", elemType: GoogleCloudDocumentaiV1DocumentPageLine }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "lines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "pageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: GoogleCloudDocumentaiV1DocumentPageParagraph }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "paragraphs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentProvenance)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbols", elemType: GoogleCloudDocumentaiV1DocumentPageSymbol }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "symbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables", elemType: GoogleCloudDocumentaiV1DocumentPageTable }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "tables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokens", elemType: GoogleCloudDocumentaiV1DocumentPageToken }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "tokens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transforms", elemType: GoogleCloudDocumentaiV1DocumentPageMatrix }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "transforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visualElements", elemType: GoogleCloudDocumentaiV1DocumentPageVisualElement }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentPage.prototype, "visualElements", void 0);
    return GoogleCloudDocumentaiV1DocumentPage;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentPage };
