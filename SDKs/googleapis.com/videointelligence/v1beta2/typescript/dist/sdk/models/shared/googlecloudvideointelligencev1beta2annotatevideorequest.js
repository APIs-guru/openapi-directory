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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVideointelligenceV1beta2VideoContext } from "./googlecloudvideointelligencev1beta2videocontext";
export var GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum;
(function (GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum) {
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["FeatureUnspecified"] = "FEATURE_UNSPECIFIED";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["LabelDetection"] = "LABEL_DETECTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["ShotChangeDetection"] = "SHOT_CHANGE_DETECTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["ExplicitContentDetection"] = "EXPLICIT_CONTENT_DETECTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["FaceDetection"] = "FACE_DETECTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["SpeechTranscription"] = "SPEECH_TRANSCRIPTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["TextDetection"] = "TEXT_DETECTION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["ObjectTracking"] = "OBJECT_TRACKING";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["LogoRecognition"] = "LOGO_RECOGNITION";
    GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum["PersonDetection"] = "PERSON_DETECTION";
})(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum || (GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = {}));
// GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest
/**
 * Video annotation request.
**/
var GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest, _super);
    function GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "features", void 0);
    __decorate([
        Metadata({ data: "json, name=inputContent" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "inputContent", void 0);
    __decorate([
        Metadata({ data: "json, name=inputUri" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "inputUri", void 0);
    __decorate([
        Metadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "json, name=outputUri" }),
        __metadata("design:type", String)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "outputUri", void 0);
    __decorate([
        Metadata({ data: "json, name=videoContext" }),
        __metadata("design:type", GoogleCloudVideointelligenceV1beta2VideoContext)
    ], GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest.prototype, "videoContext", void 0);
    return GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest;
}(SpeakeasyBase));
export { GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest };
