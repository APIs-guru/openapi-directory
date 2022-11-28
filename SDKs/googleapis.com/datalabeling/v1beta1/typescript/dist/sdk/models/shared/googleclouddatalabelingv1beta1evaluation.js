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
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationMetrics } from "./googleclouddatalabelingv1beta1evaluationmetrics";
export var GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum;
(function (GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum) {
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["AnnotationTypeUnspecified"] = "ANNOTATION_TYPE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImageClassificationAnnotation"] = "IMAGE_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImageBoundingBoxAnnotation"] = "IMAGE_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImageOrientedBoundingBoxAnnotation"] = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImageBoundingPolyAnnotation"] = "IMAGE_BOUNDING_POLY_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImagePolylineAnnotation"] = "IMAGE_POLYLINE_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["ImageSegmentationAnnotation"] = "IMAGE_SEGMENTATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["VideoShotsClassificationAnnotation"] = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["VideoObjectTrackingAnnotation"] = "VIDEO_OBJECT_TRACKING_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["VideoObjectDetectionAnnotation"] = "VIDEO_OBJECT_DETECTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["VideoEventAnnotation"] = "VIDEO_EVENT_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["TextClassificationAnnotation"] = "TEXT_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["TextEntityExtractionAnnotation"] = "TEXT_ENTITY_EXTRACTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum["GeneralClassificationAnnotation"] = "GENERAL_CLASSIFICATION_ANNOTATION";
})(GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum || (GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum = {}));
// GoogleCloudDatalabelingV1beta1Evaluation
/**
 * Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
**/
var GoogleCloudDatalabelingV1beta1Evaluation = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1Evaluation, _super);
    function GoogleCloudDatalabelingV1beta1Evaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "annotationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1EvaluationConfig)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedItemCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "evaluatedItemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationJobRunTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "evaluationJobRunTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationMetrics" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1EvaluationMetrics)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "evaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Evaluation.prototype, "name", void 0);
    return GoogleCloudDatalabelingV1beta1Evaluation;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1Evaluation };
