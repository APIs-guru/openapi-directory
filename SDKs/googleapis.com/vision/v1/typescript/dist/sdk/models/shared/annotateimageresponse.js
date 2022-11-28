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
import { ImageAnnotationContext } from "./imageannotationcontext";
import { CropHintsAnnotation } from "./crophintsannotation";
import { Status } from "./status";
import { FaceAnnotation } from "./faceannotation";
import { TextAnnotation } from "./textannotation";
import { ImageProperties } from "./imageproperties";
import { EntityAnnotation } from "./entityannotation";
import { LocalizedObjectAnnotation } from "./localizedobjectannotation";
import { ProductSearchResults } from "./productsearchresults";
import { SafeSearchAnnotation } from "./safesearchannotation";
import { WebDetection } from "./webdetection";
// AnnotateImageResponse
/**
 * Response to an image annotation request.
**/
var AnnotateImageResponse = /** @class */ (function (_super) {
    __extends(AnnotateImageResponse, _super);
    function AnnotateImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", ImageAnnotationContext)
    ], AnnotateImageResponse.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cropHintsAnnotation" }),
        __metadata("design:type", CropHintsAnnotation)
    ], AnnotateImageResponse.prototype, "cropHintsAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], AnnotateImageResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceAnnotations", elemType: FaceAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "faceAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullTextAnnotation" }),
        __metadata("design:type", TextAnnotation)
    ], AnnotateImageResponse.prototype, "fullTextAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePropertiesAnnotation" }),
        __metadata("design:type", ImageProperties)
    ], AnnotateImageResponse.prototype, "imagePropertiesAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelAnnotations", elemType: EntityAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "labelAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkAnnotations", elemType: EntityAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "landmarkAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedObjectAnnotations", elemType: LocalizedObjectAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "localizedObjectAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoAnnotations", elemType: EntityAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "logoAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productSearchResults" }),
        __metadata("design:type", ProductSearchResults)
    ], AnnotateImageResponse.prototype, "productSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safeSearchAnnotation" }),
        __metadata("design:type", SafeSearchAnnotation)
    ], AnnotateImageResponse.prototype, "safeSearchAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnnotations", elemType: EntityAnnotation }),
        __metadata("design:type", Array)
    ], AnnotateImageResponse.prototype, "textAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webDetection" }),
        __metadata("design:type", WebDetection)
    ], AnnotateImageResponse.prototype, "webDetection", void 0);
    return AnnotateImageResponse;
}(SpeakeasyBase));
export { AnnotateImageResponse };
