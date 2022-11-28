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
import { GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p1beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p1beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p1beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p1beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p1beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1VideoSegment } from "./googlecloudvideointelligencev1p1beta1videosegment";
import { GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p1beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p1beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p1beta1textdetectionconfig";
// GoogleCloudVideointelligenceV1p1beta1VideoContext
/**
 * Video context and/or feature-specific parameters.
**/
var GoogleCloudVideointelligenceV1p1beta1VideoContext = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1p1beta1VideoContext, _super);
    function GoogleCloudVideointelligenceV1p1beta1VideoContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicitContentDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "explicitContentDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "faceDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "labelDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "objectTrackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "personDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segments", elemType: GoogleCloudVideointelligenceV1p1beta1VideoSegment }),
        __metadata("design:type", Array)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shotChangeDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "shotChangeDetectionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechTranscriptionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "speechTranscriptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textDetectionConfig" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig)
    ], GoogleCloudVideointelligenceV1p1beta1VideoContext.prototype, "textDetectionConfig", void 0);
    return GoogleCloudVideointelligenceV1p1beta1VideoContext;
}(SpeakeasyBase));
export { GoogleCloudVideointelligenceV1p1beta1VideoContext };
