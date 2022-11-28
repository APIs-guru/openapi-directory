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
import { GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1beta2explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1beta2FaceDetectionConfig } from "./googlecloudvideointelligencev1beta2facedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2LabelDetectionConfig } from "./googlecloudvideointelligencev1beta2labeldetectionconfig";
import { GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig } from "./googlecloudvideointelligencev1beta2objecttrackingconfig";
import { GoogleCloudVideointelligenceV1beta2PersonDetectionConfig } from "./googlecloudvideointelligencev1beta2persondetectionconfig";
import { GoogleCloudVideointelligenceV1beta2VideoSegment } from "./googlecloudvideointelligencev1beta2videosegment";
import { GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1beta2shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1beta2speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1beta2TextDetectionConfig } from "./googlecloudvideointelligencev1beta2textdetectionconfig";
// GoogleCloudVideointelligenceV1beta2VideoContext
/**
 * Video context and/or feature-specific parameters.
**/
var GoogleCloudVideointelligenceV1beta2VideoContext = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1beta2VideoContext, _super);
    function GoogleCloudVideointelligenceV1beta2VideoContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicitContentDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "explicitContentDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2FaceDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "faceDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2LabelDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "labelDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "objectTrackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2PersonDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "personDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segments", elemType: GoogleCloudVideointelligenceV1beta2VideoSegment }),
        __metadata("design:type", Array)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shotChangeDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "shotChangeDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechTranscriptionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "speechTranscriptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2TextDetectionConfig)
    ], GoogleCloudVideointelligenceV1beta2VideoContext.prototype, "textDetectionConfig", void 0);
    return GoogleCloudVideointelligenceV1beta2VideoContext;
}(SpeakeasyBase));
export { GoogleCloudVideointelligenceV1beta2VideoContext };
