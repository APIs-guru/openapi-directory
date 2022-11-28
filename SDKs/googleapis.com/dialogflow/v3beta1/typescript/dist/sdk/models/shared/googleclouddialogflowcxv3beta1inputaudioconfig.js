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
export var GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;
(function (GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum) {
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingUnspecified"] = "AUDIO_ENCODING_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingLinear16"] = "AUDIO_ENCODING_LINEAR_16";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingFlac"] = "AUDIO_ENCODING_FLAC";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingMulaw"] = "AUDIO_ENCODING_MULAW";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingAmr"] = "AUDIO_ENCODING_AMR";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingAmrWb"] = "AUDIO_ENCODING_AMR_WB";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingOggOpus"] = "AUDIO_ENCODING_OGG_OPUS";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum["AudioEncodingSpeexWithHeaderByte"] = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE";
})(GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum || (GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum = {}));
export var GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;
(function (GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum) {
    GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum["SpeechModelVariantUnspecified"] = "SPEECH_MODEL_VARIANT_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum["UseBestAvailable"] = "USE_BEST_AVAILABLE";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum["UseStandard"] = "USE_STANDARD";
    GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum["UseEnhanced"] = "USE_ENHANCED";
})(GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum || (GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum = {}));
// GoogleCloudDialogflowCxV3beta1InputAudioConfig
/**
 * Instructs the speech recognizer on how to process the audio content.
**/
var GoogleCloudDialogflowCxV3beta1InputAudioConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1InputAudioConfig, _super);
    function GoogleCloudDialogflowCxV3beta1InputAudioConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioEncoding" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "audioEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWordInfo" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "enableWordInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelVariant" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "modelVariant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseHints" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "phraseHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUtterance" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1InputAudioConfig.prototype, "singleUtterance", void 0);
    return GoogleCloudDialogflowCxV3beta1InputAudioConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1InputAudioConfig };
