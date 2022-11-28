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
import { GoogleCloudDocumentaiV1beta2AutoMlParams } from "./googleclouddocumentaiv1beta2automlparams";
import { GoogleCloudDocumentaiV1beta2EntityExtractionParams } from "./googleclouddocumentaiv1beta2entityextractionparams";
import { GoogleCloudDocumentaiV1beta2FormExtractionParams } from "./googleclouddocumentaiv1beta2formextractionparams";
import { GoogleCloudDocumentaiV1beta2InputConfig } from "./googleclouddocumentaiv1beta2inputconfig";
import { GoogleCloudDocumentaiV1beta2OcrParams } from "./googleclouddocumentaiv1beta2ocrparams";
import { GoogleCloudDocumentaiV1beta2OutputConfig } from "./googleclouddocumentaiv1beta2outputconfig";
import { GoogleCloudDocumentaiV1beta2TableExtractionParams } from "./googleclouddocumentaiv1beta2tableextractionparams";
// GoogleCloudDocumentaiV1beta2ProcessDocumentRequest
/**
 * Request to process one document.
**/
var GoogleCloudDocumentaiV1beta2ProcessDocumentRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta2ProcessDocumentRequest, _super);
    function GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automlParams" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2AutoMlParams)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "automlParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentType" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityExtractionParams" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2EntityExtractionParams)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "entityExtractionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formExtractionParams" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2FormExtractionParams)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "formExtractionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2InputConfig)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ocrParams" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2OcrParams)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "ocrParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputConfig" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2OutputConfig)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "outputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableExtractionParams" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta2TableExtractionParams)
    ], GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.prototype, "tableExtractionParams", void 0);
    return GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta2ProcessDocumentRequest };
