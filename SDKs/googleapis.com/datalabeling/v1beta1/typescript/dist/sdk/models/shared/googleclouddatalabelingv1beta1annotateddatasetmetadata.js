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
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
// GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
/**
 * Metadata on AnnotatedDataset.
**/
var GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata, _super);
    function GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPolyConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1BoundingPolyConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "boundingPolyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1EventConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "eventConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAnnotationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1HumanAnnotationConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "humanAnnotationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageClassificationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImageClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "imageClassificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectDetectionConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ObjectDetectionConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "objectDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ObjectTrackingConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "objectTrackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=polylineConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1PolylineConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "polylineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1SegmentationConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "segmentationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textClassificationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "textClassificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textEntityExtractionConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "textEntityExtractionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassificationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata.prototype, "videoClassificationConfig", void 0);
    return GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata };
