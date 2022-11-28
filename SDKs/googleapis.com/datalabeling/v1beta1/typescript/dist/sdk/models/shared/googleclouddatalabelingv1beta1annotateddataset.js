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
import { GoogleCloudDatalabelingV1beta1LabelStats } from "./googleclouddatalabelingv1beta1labelstats";
import { GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata } from "./googleclouddatalabelingv1beta1annotateddatasetmetadata";
export var GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum;
(function (GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum) {
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum["AnnotationSourceUnspecified"] = "ANNOTATION_SOURCE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum["Operator"] = "OPERATOR";
})(GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum || (GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum = {}));
export var GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum;
(function (GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum) {
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["AnnotationTypeUnspecified"] = "ANNOTATION_TYPE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImageClassificationAnnotation"] = "IMAGE_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImageBoundingBoxAnnotation"] = "IMAGE_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImageOrientedBoundingBoxAnnotation"] = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImageBoundingPolyAnnotation"] = "IMAGE_BOUNDING_POLY_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImagePolylineAnnotation"] = "IMAGE_POLYLINE_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["ImageSegmentationAnnotation"] = "IMAGE_SEGMENTATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["VideoShotsClassificationAnnotation"] = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["VideoObjectTrackingAnnotation"] = "VIDEO_OBJECT_TRACKING_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["VideoObjectDetectionAnnotation"] = "VIDEO_OBJECT_DETECTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["VideoEventAnnotation"] = "VIDEO_EVENT_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["TextClassificationAnnotation"] = "TEXT_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["TextEntityExtractionAnnotation"] = "TEXT_ENTITY_EXTRACTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum["GeneralClassificationAnnotation"] = "GENERAL_CLASSIFICATION_ANNOTATION";
})(GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum || (GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum = {}));
// GoogleCloudDatalabelingV1beta1AnnotatedDataset
/**
 * AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
**/
var GoogleCloudDatalabelingV1beta1AnnotatedDataset = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1AnnotatedDataset, _super);
    function GoogleCloudDatalabelingV1beta1AnnotatedDataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "annotationSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "annotationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockingResources" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "blockingResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedExampleCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "completedExampleCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exampleCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "exampleCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelStats" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1LabelStats)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "labelStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDataset.prototype, "name", void 0);
    return GoogleCloudDatalabelingV1beta1AnnotatedDataset;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1AnnotatedDataset };
