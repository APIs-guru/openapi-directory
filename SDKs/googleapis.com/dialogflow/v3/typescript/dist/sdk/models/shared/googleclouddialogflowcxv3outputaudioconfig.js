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
import { GoogleCloudDialogflowCxV3SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3synthesizespeechconfig";
export var GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum;
(function (GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum) {
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingUnspecified"] = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED";
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingLinear16"] = "OUTPUT_AUDIO_ENCODING_LINEAR_16";
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMp3"] = "OUTPUT_AUDIO_ENCODING_MP3";
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMp364Kbps"] = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS";
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingOggOpus"] = "OUTPUT_AUDIO_ENCODING_OGG_OPUS";
    GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum["OutputAudioEncodingMulaw"] = "OUTPUT_AUDIO_ENCODING_MULAW";
})(GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum || (GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum = {}));
// GoogleCloudDialogflowCxV3OutputAudioConfig
/**
 * Instructs the speech synthesizer how to generate the output audio content.
**/
var GoogleCloudDialogflowCxV3OutputAudioConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3OutputAudioConfig, _super);
    function GoogleCloudDialogflowCxV3OutputAudioConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioEncoding" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3OutputAudioConfig.prototype, "audioEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3OutputAudioConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synthesizeSpeechConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3SynthesizeSpeechConfig)
    ], GoogleCloudDialogflowCxV3OutputAudioConfig.prototype, "synthesizeSpeechConfig", void 0);
    return GoogleCloudDialogflowCxV3OutputAudioConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3OutputAudioConfig };
