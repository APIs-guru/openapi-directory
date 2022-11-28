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
import { GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig } from "./googleclouddialogflowv2beta1synthesizespeechconfig";
export var GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum;
(function (GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum) {
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingUnspecified"] = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingLinear16"] = "OUTPUT_AUDIO_ENCODING_LINEAR_16";
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMp3"] = "OUTPUT_AUDIO_ENCODING_MP3";
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMp364Kbps"] = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS";
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingOggOpus"] = "OUTPUT_AUDIO_ENCODING_OGG_OPUS";
    GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMulaw"] = "OUTPUT_AUDIO_ENCODING_MULAW";
})(GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum || (GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum = {}));
// GoogleCloudDialogflowV2beta1OutputAudioConfig
/**
 * Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
**/
var GoogleCloudDialogflowV2beta1OutputAudioConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1OutputAudioConfig, _super);
    function GoogleCloudDialogflowV2beta1OutputAudioConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioEncoding" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1OutputAudioConfig.prototype, "audioEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1OutputAudioConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synthesizeSpeechConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig)
    ], GoogleCloudDialogflowV2beta1OutputAudioConfig.prototype, "synthesizeSpeechConfig", void 0);
    return GoogleCloudDialogflowV2beta1OutputAudioConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1OutputAudioConfig };
