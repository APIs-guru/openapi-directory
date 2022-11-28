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
import { GoogleCloudVisionV1p1beta1ImageAnnotationContext } from "./googlecloudvisionv1p1beta1imageannotationcontext";
import { GoogleCloudVisionV1p1beta1CropHintsAnnotation } from "./googlecloudvisionv1p1beta1crophintsannotation";
import { Status } from "./status";
import { GoogleCloudVisionV1p1beta1FaceAnnotation } from "./googlecloudvisionv1p1beta1faceannotation";
import { GoogleCloudVisionV1p1beta1TextAnnotation } from "./googlecloudvisionv1p1beta1textannotation";
import { GoogleCloudVisionV1p1beta1ImageProperties } from "./googlecloudvisionv1p1beta1imageproperties";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation } from "./googlecloudvisionv1p1beta1localizedobjectannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResults } from "./googlecloudvisionv1p1beta1productsearchresults";
import { GoogleCloudVisionV1p1beta1SafeSearchAnnotation } from "./googlecloudvisionv1p1beta1safesearchannotation";
import { GoogleCloudVisionV1p1beta1WebDetection } from "./googlecloudvisionv1p1beta1webdetection";
// GoogleCloudVisionV1p1beta1AnnotateImageResponse
/**
 * Response to an image annotation request.
**/
var GoogleCloudVisionV1p1beta1AnnotateImageResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p1beta1AnnotateImageResponse, _super);
    function GoogleCloudVisionV1p1beta1AnnotateImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1ImageAnnotationContext)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cropHintsAnnotation" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1CropHintsAnnotation)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "cropHintsAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceAnnotations", elemType: GoogleCloudVisionV1p1beta1FaceAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "faceAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullTextAnnotation" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1TextAnnotation)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "fullTextAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePropertiesAnnotation" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1ImageProperties)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "imagePropertiesAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "labelAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landmarkAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "landmarkAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizedObjectAnnotations", elemType: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "localizedObjectAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "logoAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productSearchResults" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1ProductSearchResults)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "productSearchResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safeSearchAnnotation" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1SafeSearchAnnotation)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "safeSearchAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "textAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webDetection" }),
        __metadata("design:type", GoogleCloudVisionV1p1beta1WebDetection)
    ], GoogleCloudVisionV1p1beta1AnnotateImageResponse.prototype, "webDetection", void 0);
    return GoogleCloudVisionV1p1beta1AnnotateImageResponse;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p1beta1AnnotateImageResponse };
