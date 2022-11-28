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
import { SubtitlePlaybackModeEnum } from "./subtitleplaybackmodeenum";
// UserConfiguration
/**
 * Class UserConfiguration.
**/
var UserConfiguration = /** @class */ (function (_super) {
    __extends(UserConfiguration, _super);
    function UserConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioLanguagePreference" }),
        __metadata("design:type", String)
    ], UserConfiguration.prototype, "audioLanguagePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayCollectionsView" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "displayCollectionsView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayMissingEpisodes" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "displayMissingEpisodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableLocalPassword" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "enableLocalPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNextEpisodeAutoPlay" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "enableNextEpisodeAutoPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupedFolders" }),
        __metadata("design:type", Array)
    ], UserConfiguration.prototype, "groupedFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HidePlayedInLatest" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "hidePlayedInLatest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestItemsExcludes" }),
        __metadata("design:type", Array)
    ], UserConfiguration.prototype, "latestItemsExcludes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MyMediaExcludes" }),
        __metadata("design:type", Array)
    ], UserConfiguration.prototype, "myMediaExcludes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderedViews" }),
        __metadata("design:type", Array)
    ], UserConfiguration.prototype, "orderedViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayDefaultAudioTrack" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "playDefaultAudioTrack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RememberAudioSelections" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "rememberAudioSelections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RememberSubtitleSelections" }),
        __metadata("design:type", Boolean)
    ], UserConfiguration.prototype, "rememberSubtitleSelections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleLanguagePreference" }),
        __metadata("design:type", String)
    ], UserConfiguration.prototype, "subtitleLanguagePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleMode" }),
        __metadata("design:type", String)
    ], UserConfiguration.prototype, "subtitleMode", void 0);
    return UserConfiguration;
}(SpeakeasyBase));
export { UserConfiguration };
