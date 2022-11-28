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
export var GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
(function (GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum) {
    GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum["SsmlVoiceGenderUnspecified"] = "SSML_VOICE_GENDER_UNSPECIFIED";
    GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum["SsmlVoiceGenderMale"] = "SSML_VOICE_GENDER_MALE";
    GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum["SsmlVoiceGenderFemale"] = "SSML_VOICE_GENDER_FEMALE";
    GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum["SsmlVoiceGenderNeutral"] = "SSML_VOICE_GENDER_NEUTRAL";
})(GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum || (GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum = {}));
// GoogleCloudDialogflowV2VoiceSelectionParams
/**
 * Description of which voice to use for speech synthesis.
**/
var GoogleCloudDialogflowV2VoiceSelectionParams = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2VoiceSelectionParams, _super);
    function GoogleCloudDialogflowV2VoiceSelectionParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2VoiceSelectionParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssmlGender" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2VoiceSelectionParams.prototype, "ssmlGender", void 0);
    return GoogleCloudDialogflowV2VoiceSelectionParams;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2VoiceSelectionParams };
