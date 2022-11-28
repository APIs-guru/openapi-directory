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
import { GoogleCloudDatalabelingV1beta1BigQuerySource } from "./googleclouddatalabelingv1beta1bigquerysource";
import { GoogleCloudDatalabelingV1beta1ClassificationMetadata } from "./googleclouddatalabelingv1beta1classificationmetadata";
import { GoogleCloudDatalabelingV1beta1GcsSource } from "./googleclouddatalabelingv1beta1gcssource";
import { GoogleCloudDatalabelingV1beta1TextMetadata } from "./googleclouddatalabelingv1beta1textmetadata";
export var GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
(function (GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum) {
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["AnnotationTypeUnspecified"] = "ANNOTATION_TYPE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImageClassificationAnnotation"] = "IMAGE_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImageBoundingBoxAnnotation"] = "IMAGE_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImageOrientedBoundingBoxAnnotation"] = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImageBoundingPolyAnnotation"] = "IMAGE_BOUNDING_POLY_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImagePolylineAnnotation"] = "IMAGE_POLYLINE_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["ImageSegmentationAnnotation"] = "IMAGE_SEGMENTATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["VideoShotsClassificationAnnotation"] = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["VideoObjectTrackingAnnotation"] = "VIDEO_OBJECT_TRACKING_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["VideoObjectDetectionAnnotation"] = "VIDEO_OBJECT_DETECTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["VideoEventAnnotation"] = "VIDEO_EVENT_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["TextClassificationAnnotation"] = "TEXT_CLASSIFICATION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["TextEntityExtractionAnnotation"] = "TEXT_ENTITY_EXTRACTION_ANNOTATION";
    GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum["GeneralClassificationAnnotation"] = "GENERAL_CLASSIFICATION_ANNOTATION";
})(GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum || (GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum = {}));
export var GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
(function (GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum) {
    GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum["Image"] = "IMAGE";
    GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum["Video"] = "VIDEO";
    GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum["Text"] = "TEXT";
    GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum["GeneralData"] = "GENERAL_DATA";
})(GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum || (GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum = {}));
// GoogleCloudDatalabelingV1beta1InputConfig
/**
 * The configuration of input data, including data type, location, etc.
**/
var GoogleCloudDatalabelingV1beta1InputConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1InputConfig, _super);
    function GoogleCloudDatalabelingV1beta1InputConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "annotationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigquerySource" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1BigQuerySource)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "bigquerySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationMetadata" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ClassificationMetadata)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "classificationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsSource" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1GcsSource)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "gcsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMetadata" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextMetadata)
    ], GoogleCloudDatalabelingV1beta1InputConfig.prototype, "textMetadata", void 0);
    return GoogleCloudDatalabelingV1beta1InputConfig;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1InputConfig };
