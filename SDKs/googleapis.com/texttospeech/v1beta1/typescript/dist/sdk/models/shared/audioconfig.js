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
export var AudioConfigAudioEncodingEnum;
(function (AudioConfigAudioEncodingEnum) {
    AudioConfigAudioEncodingEnum["AudioEncodingUnspecified"] = "AUDIO_ENCODING_UNSPECIFIED";
    AudioConfigAudioEncodingEnum["Linear16"] = "LINEAR16";
    AudioConfigAudioEncodingEnum["Mp3"] = "MP3";
    AudioConfigAudioEncodingEnum["Mp364Kbps"] = "MP3_64_KBPS";
    AudioConfigAudioEncodingEnum["OggOpus"] = "OGG_OPUS";
    AudioConfigAudioEncodingEnum["Mulaw"] = "MULAW";
    AudioConfigAudioEncodingEnum["Alaw"] = "ALAW";
})(AudioConfigAudioEncodingEnum || (AudioConfigAudioEncodingEnum = {}));
// AudioConfig
/**
 * Description of audio data to be synthesized.
**/
var AudioConfig = /** @class */ (function (_super) {
    __extends(AudioConfig, _super);
    function AudioConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=audioEncoding" }),
        __metadata("design:type", String)
    ], AudioConfig.prototype, "audioEncoding", void 0);
    __decorate([
        Metadata({ data: "json, name=effectsProfileId" }),
        __metadata("design:type", Array)
    ], AudioConfig.prototype, "effectsProfileId", void 0);
    __decorate([
        Metadata({ data: "json, name=pitch" }),
        __metadata("design:type", Number)
    ], AudioConfig.prototype, "pitch", void 0);
    __decorate([
        Metadata({ data: "json, name=sampleRateHertz" }),
        __metadata("design:type", Number)
    ], AudioConfig.prototype, "sampleRateHertz", void 0);
    __decorate([
        Metadata({ data: "json, name=speakingRate" }),
        __metadata("design:type", Number)
    ], AudioConfig.prototype, "speakingRate", void 0);
    __decorate([
        Metadata({ data: "json, name=volumeGainDb" }),
        __metadata("design:type", Number)
    ], AudioConfig.prototype, "volumeGainDb", void 0);
    return AudioConfig;
}(SpeakeasyBase));
export { AudioConfig };
