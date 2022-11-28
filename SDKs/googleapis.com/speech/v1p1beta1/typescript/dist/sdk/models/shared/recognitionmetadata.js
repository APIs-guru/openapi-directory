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
export var RecognitionMetadataInteractionTypeEnum;
(function (RecognitionMetadataInteractionTypeEnum) {
    RecognitionMetadataInteractionTypeEnum["InteractionTypeUnspecified"] = "INTERACTION_TYPE_UNSPECIFIED";
    RecognitionMetadataInteractionTypeEnum["Discussion"] = "DISCUSSION";
    RecognitionMetadataInteractionTypeEnum["Presentation"] = "PRESENTATION";
    RecognitionMetadataInteractionTypeEnum["PhoneCall"] = "PHONE_CALL";
    RecognitionMetadataInteractionTypeEnum["Voicemail"] = "VOICEMAIL";
    RecognitionMetadataInteractionTypeEnum["ProfessionallyProduced"] = "PROFESSIONALLY_PRODUCED";
    RecognitionMetadataInteractionTypeEnum["VoiceSearch"] = "VOICE_SEARCH";
    RecognitionMetadataInteractionTypeEnum["VoiceCommand"] = "VOICE_COMMAND";
    RecognitionMetadataInteractionTypeEnum["Dictation"] = "DICTATION";
})(RecognitionMetadataInteractionTypeEnum || (RecognitionMetadataInteractionTypeEnum = {}));
export var RecognitionMetadataMicrophoneDistanceEnum;
(function (RecognitionMetadataMicrophoneDistanceEnum) {
    RecognitionMetadataMicrophoneDistanceEnum["MicrophoneDistanceUnspecified"] = "MICROPHONE_DISTANCE_UNSPECIFIED";
    RecognitionMetadataMicrophoneDistanceEnum["Nearfield"] = "NEARFIELD";
    RecognitionMetadataMicrophoneDistanceEnum["Midfield"] = "MIDFIELD";
    RecognitionMetadataMicrophoneDistanceEnum["Farfield"] = "FARFIELD";
})(RecognitionMetadataMicrophoneDistanceEnum || (RecognitionMetadataMicrophoneDistanceEnum = {}));
export var RecognitionMetadataOriginalMediaTypeEnum;
(function (RecognitionMetadataOriginalMediaTypeEnum) {
    RecognitionMetadataOriginalMediaTypeEnum["OriginalMediaTypeUnspecified"] = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED";
    RecognitionMetadataOriginalMediaTypeEnum["Audio"] = "AUDIO";
    RecognitionMetadataOriginalMediaTypeEnum["Video"] = "VIDEO";
})(RecognitionMetadataOriginalMediaTypeEnum || (RecognitionMetadataOriginalMediaTypeEnum = {}));
export var RecognitionMetadataRecordingDeviceTypeEnum;
(function (RecognitionMetadataRecordingDeviceTypeEnum) {
    RecognitionMetadataRecordingDeviceTypeEnum["RecordingDeviceTypeUnspecified"] = "RECORDING_DEVICE_TYPE_UNSPECIFIED";
    RecognitionMetadataRecordingDeviceTypeEnum["Smartphone"] = "SMARTPHONE";
    RecognitionMetadataRecordingDeviceTypeEnum["Pc"] = "PC";
    RecognitionMetadataRecordingDeviceTypeEnum["PhoneLine"] = "PHONE_LINE";
    RecognitionMetadataRecordingDeviceTypeEnum["Vehicle"] = "VEHICLE";
    RecognitionMetadataRecordingDeviceTypeEnum["OtherOutdoorDevice"] = "OTHER_OUTDOOR_DEVICE";
    RecognitionMetadataRecordingDeviceTypeEnum["OtherIndoorDevice"] = "OTHER_INDOOR_DEVICE";
})(RecognitionMetadataRecordingDeviceTypeEnum || (RecognitionMetadataRecordingDeviceTypeEnum = {}));
// RecognitionMetadata
/**
 * Description of audio data to be recognized.
**/
var RecognitionMetadata = /** @class */ (function (_super) {
    __extends(RecognitionMetadata, _super);
    function RecognitionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioTopic" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "audioTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryNaicsCodeOfAudio" }),
        __metadata("design:type", Number)
    ], RecognitionMetadata.prototype, "industryNaicsCodeOfAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactionType" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "interactionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=microphoneDistance" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "microphoneDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedId" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "obfuscatedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalMediaType" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "originalMediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalMimeType" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "originalMimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingDeviceName" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "recordingDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingDeviceType" }),
        __metadata("design:type", String)
    ], RecognitionMetadata.prototype, "recordingDeviceType", void 0);
    return RecognitionMetadata;
}(SpeakeasyBase));
export { RecognitionMetadata };
