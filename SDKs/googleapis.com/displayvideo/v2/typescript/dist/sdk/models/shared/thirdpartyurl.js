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
export var ThirdPartyUrlTypeEnum;
(function (ThirdPartyUrlTypeEnum) {
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeUnspecified"] = "THIRD_PARTY_URL_TYPE_UNSPECIFIED";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeImpression"] = "THIRD_PARTY_URL_TYPE_IMPRESSION";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeClickTracking"] = "THIRD_PARTY_URL_TYPE_CLICK_TRACKING";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoStart"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoFirstQuartile"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoMidpoint"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoThirdQuartile"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoComplete"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoMute"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoPause"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoRewind"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoFullscreen"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoStop"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoCustom"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoSkip"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP";
    ThirdPartyUrlTypeEnum["ThirdPartyUrlTypeAudioVideoProgress"] = "THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS";
})(ThirdPartyUrlTypeEnum || (ThirdPartyUrlTypeEnum = {}));
// ThirdPartyUrl
/**
 * Tracking URLs from third parties to track interactions with an audio or a video creative.
**/
var ThirdPartyUrl = /** @class */ (function (_super) {
    __extends(ThirdPartyUrl, _super);
    function ThirdPartyUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ThirdPartyUrl.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ThirdPartyUrl.prototype, "url", void 0);
    return ThirdPartyUrl;
}(SpeakeasyBase));
export { ThirdPartyUrl };
