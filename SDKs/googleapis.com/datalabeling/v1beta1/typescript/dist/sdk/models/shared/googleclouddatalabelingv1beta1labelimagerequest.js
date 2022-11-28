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
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
export var GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;
(function (GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum) {
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["Classification"] = "CLASSIFICATION";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["BoundingBox"] = "BOUNDING_BOX";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["OrientedBoundingBox"] = "ORIENTED_BOUNDING_BOX";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["BoundingPoly"] = "BOUNDING_POLY";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["Polyline"] = "POLYLINE";
    GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum["Segmentation"] = "SEGMENTATION";
})(GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum || (GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum = {}));
// GoogleCloudDatalabelingV1beta1LabelImageRequest
/**
 * Request message for starting an image labeling task.
**/
var GoogleCloudDatalabelingV1beta1LabelImageRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1LabelImageRequest, _super);
    function GoogleCloudDatalabelingV1beta1LabelImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1HumanAnnotationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "basicConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boundingPolyConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1BoundingPolyConfig)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "boundingPolyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feature" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageClassificationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ImageClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "imageClassificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=polylineConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1PolylineConfig)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "polylineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1SegmentationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelImageRequest.prototype, "segmentationConfig", void 0);
    return GoogleCloudDatalabelingV1beta1LabelImageRequest;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1LabelImageRequest };
