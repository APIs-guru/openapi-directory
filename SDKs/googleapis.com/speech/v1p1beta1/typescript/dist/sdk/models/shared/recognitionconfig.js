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
import { SpeechAdaptation } from "./speechadaptation";
import { SpeakerDiarizationConfigInput } from "./speakerdiarizationconfig";
import { RecognitionMetadata } from "./recognitionmetadata";
import { SpeechContext } from "./speechcontext";
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
// RecognitionConfigInput
/**
 * Provides information to the recognizer that specifies how to process the request.
**/
var RecognitionConfigInput = /** @class */ (function (_super) {
    __extends(RecognitionConfigInput, _super);
    function RecognitionConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adaptation" }),
        __metadata("design:type", SpeechAdaptation)
    ], RecognitionConfigInput.prototype, "adaptation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternativeLanguageCodes" }),
        __metadata("design:type", Array)
    ], RecognitionConfigInput.prototype, "alternativeLanguageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioChannelCount" }),
        __metadata("design:type", Number)
    ], RecognitionConfigInput.prototype, "audioChannelCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diarizationConfig" }),
        __metadata("design:type", SpeakerDiarizationConfigInput)
    ], RecognitionConfigInput.prototype, "diarizationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diarizationSpeakerCount" }),
        __metadata("design:type", Number)
    ], RecognitionConfigInput.prototype, "diarizationSpeakerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutomaticPunctuation" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableAutomaticPunctuation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSeparateRecognitionPerChannel" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableSeparateRecognitionPerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSpeakerDiarization" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableSpeakerDiarization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSpokenEmojis" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableSpokenEmojis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSpokenPunctuation" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableSpokenPunctuation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWordConfidence" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableWordConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWordTimeOffsets" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "enableWordTimeOffsets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], RecognitionConfigInput.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], RecognitionConfigInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAlternatives" }),
        __metadata("design:type", Number)
    ], RecognitionConfigInput.prototype, "maxAlternatives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", RecognitionMetadata)
    ], RecognitionConfigInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], RecognitionConfigInput.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profanityFilter" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "profanityFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], RecognitionConfigInput.prototype, "sampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechContexts", elemType: SpeechContext }),
        __metadata("design:type", Array)
    ], RecognitionConfigInput.prototype, "speechContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcriptNormalization" }),
        __metadata("design:type", TranscriptNormalization)
    ], RecognitionConfigInput.prototype, "transcriptNormalization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useEnhanced" }),
        __metadata("design:type", Boolean)
    ], RecognitionConfigInput.prototype, "useEnhanced", void 0);
    return RecognitionConfigInput;
}(SpeakeasyBase));
export { RecognitionConfigInput };
