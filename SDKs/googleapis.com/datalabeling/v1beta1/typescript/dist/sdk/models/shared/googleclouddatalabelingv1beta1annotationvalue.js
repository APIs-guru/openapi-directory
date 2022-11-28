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
import { GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation } from "./googleclouddatalabelingv1beta1imageboundingpolyannotation";
import { GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation } from "./googleclouddatalabelingv1beta1imageclassificationannotation";
import { GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation } from "./googleclouddatalabelingv1beta1imagepolylineannotation";
import { GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation } from "./googleclouddatalabelingv1beta1imagesegmentationannotation";
import { GoogleCloudDatalabelingV1beta1TextClassificationAnnotation } from "./googleclouddatalabelingv1beta1textclassificationannotation";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation } from "./googleclouddatalabelingv1beta1textentityextractionannotation";
import { GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation } from "./googleclouddatalabelingv1beta1videoclassificationannotation";
import { GoogleCloudDatalabelingV1beta1VideoEventAnnotation } from "./googleclouddatalabelingv1beta1videoeventannotation";
import { GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation } from "./googleclouddatalabelingv1beta1videoobjecttrackingannotation";
// GoogleCloudDatalabelingV1beta1AnnotationValue
/**
 * Annotation value for an example.
**/
var GoogleCloudDatalabelingV1beta1AnnotationValue = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1AnnotationValue, _super);
    function GoogleCloudDatalabelingV1beta1AnnotationValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageBoundingPolyAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "imageBoundingPolyAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageClassificationAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "imageClassificationAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePolylineAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "imagePolylineAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageSegmentationAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "imageSegmentationAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textClassificationAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextClassificationAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "textClassificationAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textEntityExtractionAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "textEntityExtractionAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassificationAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "videoClassificationAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoEventAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoEventAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "videoEventAnnotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoObjectTrackingAnnotation" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation)
    ], GoogleCloudDatalabelingV1beta1AnnotationValue.prototype, "videoObjectTrackingAnnotation", void 0);
    return GoogleCloudDatalabelingV1beta1AnnotationValue;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1AnnotationValue };
