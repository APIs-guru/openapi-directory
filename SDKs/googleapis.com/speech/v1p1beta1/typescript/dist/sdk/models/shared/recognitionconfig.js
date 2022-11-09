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
import * as shared from "../shared";
import { SpeechAdaptation } from "./speechadaptation";
import { SpeakerDiarizationConfig } from "./speakerdiarizationconfig";
import { RecognitionMetadata } from "./recognitionmetadata";
import { TranscriptNormalization } from "./transcriptnormalization";
export var RecognitionConfigEncodingEnum;
(function (RecognitionConfigEncodingEnum) {
    RecognitionConfigEncodingEnum["EncodingUnspecified"] = "ENCODING_UNSPECIFIED";
    RecognitionConfigEncodingEnum["Linear16"] = "LINEAR16";
    RecognitionConfigEncodingEnum["Flac"] = "FLAC";
    RecognitionConfigEncodingEnum["Mulaw"] = "MULAW";
    RecognitionConfigEncodingEnum["Amr"] = "AMR";
    RecognitionConfigEncodingEnum["AmrWb"] = "AMR_WB";
    RecognitionConfigEncodingEnum["OggOpus"] = "OGG_OPUS";
    RecognitionConfigEncodingEnum["SpeexWithHeaderByte"] = "SPEEX_WITH_HEADER_BYTE";
    RecognitionConfigEncodingEnum["Mp3"] = "MP3";
    RecognitionConfigEncodingEnum["WebmOpus"] = "WEBM_OPUS";
})(RecognitionConfigEncodingEnum || (RecognitionConfigEncodingEnum = {}));
// RecognitionConfig
/**
 * Provides information to the recognizer that specifies how to process the request.
**/
var RecognitionConfig = /** @class */ (function (_super) {
    __extends(RecognitionConfig, _super);
    function RecognitionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=adaptation" }),
        __metadata("design:type", SpeechAdaptation)
    ], RecognitionConfig.prototype, "adaptation", void 0);
    __decorate([
        Metadata({ data: "json, name=alternativeLanguageCodes" }),
        __metadata("design:type", Array)
    ], RecognitionConfig.prototype, "alternativeLanguageCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=audioChannelCount" }),
        __metadata("design:type", Number)
    ], RecognitionConfig.prototype, "audioChannelCount", void 0);
    __decorate([
        Metadata({ data: "json, name=diarizationConfig" }),
        __metadata("design:type", SpeakerDiarizationConfig)
    ], RecognitionConfig.prototype, "diarizationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=diarizationSpeakerCount" }),
        __metadata("design:type", Number)
    ], RecognitionConfig.prototype, "diarizationSpeakerCount", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutomaticPunctuation" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableAutomaticPunctuation", void 0);
    __decorate([
        Metadata({ data: "json, name=enableSeparateRecognitionPerChannel" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableSeparateRecognitionPerChannel", void 0);
    __decorate([
        Metadata({ data: "json, name=enableSpeakerDiarization" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableSpeakerDiarization", void 0);
    __decorate([
        Metadata({ data: "json, name=enableSpokenEmojis" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableSpokenEmojis", void 0);
    __decorate([
        Metadata({ data: "json, name=enableSpokenPunctuation" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableSpokenPunctuation", void 0);
    __decorate([
        Metadata({ data: "json, name=enableWordConfidence" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableWordConfidence", void 0);
    __decorate([
        Metadata({ data: "json, name=enableWordTimeOffsets" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "enableWordTimeOffsets", void 0);
    __decorate([
        Metadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], RecognitionConfig.prototype, "encoding", void 0);
    __decorate([
        Metadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], RecognitionConfig.prototype, "languageCode", void 0);
    __decorate([
        Metadata({ data: "json, name=maxAlternatives" }),
        __metadata("design:type", Number)
    ], RecognitionConfig.prototype, "maxAlternatives", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", RecognitionMetadata)
    ], RecognitionConfig.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], RecognitionConfig.prototype, "model", void 0);
    __decorate([
        Metadata({ data: "json, name=profanityFilter" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "profanityFilter", void 0);
    __decorate([
        Metadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], RecognitionConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        Metadata({ data: "json, name=speechContexts", elemType: shared.SpeechContext }),
        __metadata("design:type", Array)
    ], RecognitionConfig.prototype, "speechContexts", void 0);
    __decorate([
        Metadata({ data: "json, name=transcriptNormalization" }),
        __metadata("design:type", TranscriptNormalization)
    ], RecognitionConfig.prototype, "transcriptNormalization", void 0);
    __decorate([
        Metadata({ data: "json, name=useEnhanced" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfig.prototype, "useEnhanced", void 0);
    return RecognitionConfig;
}(SpeakeasyBase));
export { RecognitionConfig };
