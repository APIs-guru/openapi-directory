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
import { GoogleCloudDialogflowV2SpeechContext } from "./googleclouddialogflowv2speechcontext";
export var GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;
(function (GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum) {
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingUnspecified"] = "AUDIO_ENCODING_UNSPECIFIED";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingLinear16"] = "AUDIO_ENCODING_LINEAR_16";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingFlac"] = "AUDIO_ENCODING_FLAC";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingMulaw"] = "AUDIO_ENCODING_MULAW";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingAmr"] = "AUDIO_ENCODING_AMR";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingAmrWb"] = "AUDIO_ENCODING_AMR_WB";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingOggOpus"] = "AUDIO_ENCODING_OGG_OPUS";
    GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum["AudioEncodingSpeexWithHeaderByte"] = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE";
})(GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum || (GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum = {}));
export var GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;
(function (GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum) {
    GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum["SpeechModelVariantUnspecified"] = "SPEECH_MODEL_VARIANT_UNSPECIFIED";
    GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum["UseBestAvailable"] = "USE_BEST_AVAILABLE";
    GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum["UseStandard"] = "USE_STANDARD";
    GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum["UseEnhanced"] = "USE_ENHANCED";
})(GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum || (GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum = {}));
// GoogleCloudDialogflowV2InputAudioConfig
/**
 * Instructs the speech recognizer how to process the audio content.
**/
var GoogleCloudDialogflowV2InputAudioConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2InputAudioConfig, _super);
    function GoogleCloudDialogflowV2InputAudioConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioEncoding" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "audioEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableNoSpeechRecognizedEvent" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "disableNoSpeechRecognizedEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWordInfo" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "enableWordInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelVariant" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "modelVariant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseHints" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "phraseHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUtterance" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "singleUtterance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechContexts", elemType: GoogleCloudDialogflowV2SpeechContext }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2InputAudioConfig.prototype, "speechContexts", void 0);
    return GoogleCloudDialogflowV2InputAudioConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2InputAudioConfig };
