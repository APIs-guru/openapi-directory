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
import { GoogleCloudVideointelligenceV1p1beta1VideoContext } from "./googlecloudvideointelligencev1p1beta1videocontext";
export var GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum;
(function (GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum) {
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["LabelDetection"] = "LABEL_DETECTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["ShotChangeDetection"] = "SHOT_CHANGE_DETECTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["ExplicitContentDetection"] = "EXPLICIT_CONTENT_DETECTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["FaceDetection"] = "FACE_DETECTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["SpeechTranscription"] = "SPEECH_TRANSCRIPTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["TextDetection"] = "TEXT_DETECTION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["ObjectTracking"] = "OBJECT_TRACKING";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["LogoRecognition"] = "LOGO_RECOGNITION";
    GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum["PersonDetection"] = "PERSON_DETECTION";
})(GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum || (GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum = {}));
// GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest
/**
 * Video annotation request.
**/
var GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest, _super);
    function GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContent" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "inputContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputUri" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "inputUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputUri" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "outputUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoContext" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1p1beta1VideoContext)
    ], GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest.prototype, "videoContext", void 0);
    return GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest;
}(SpeakeasyBase));
export { GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest };
