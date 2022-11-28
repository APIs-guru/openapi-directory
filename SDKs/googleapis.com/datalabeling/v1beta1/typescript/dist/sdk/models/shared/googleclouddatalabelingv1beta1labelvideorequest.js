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
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
export var GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
(function (GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum) {
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["Classification"] = "CLASSIFICATION";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["ObjectDetection"] = "OBJECT_DETECTION";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["ObjectTracking"] = "OBJECT_TRACKING";
    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum["Event"] = "EVENT";
})(GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum || (GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = {}));
// GoogleCloudDatalabelingV1beta1LabelVideoRequest
/**
 * Request message for LabelVideo.
**/
var GoogleCloudDatalabelingV1beta1LabelVideoRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1LabelVideoRequest, _super);
    function GoogleCloudDatalabelingV1beta1LabelVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1HumanAnnotationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "basicConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1EventConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "eventConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feature" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectDetectionConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ObjectDetectionConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "objectDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ObjectTrackingConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "objectTrackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassificationConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1VideoClassificationConfig)
    ], GoogleCloudDatalabelingV1beta1LabelVideoRequest.prototype, "videoClassificationConfig", void 0);
    return GoogleCloudDatalabelingV1beta1LabelVideoRequest;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1LabelVideoRequest };
