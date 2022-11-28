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
import { MediaPathInfo } from "./mediapathinfo";
import { TypeOptions } from "./typeoptions";
var LibraryOptions = /** @class */ (function (_super) {
    __extends(LibraryOptions, _super);
    function LibraryOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomaticRefreshIntervalDays" }),
        __metadata("design:type", Number)
    ], LibraryOptions.prototype, "automaticRefreshIntervalDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisabledLocalMetadataReaders" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "disabledLocalMetadataReaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisabledSubtitleFetchers" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "disabledSubtitleFetchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAutomaticSeriesGrouping" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableAutomaticSeriesGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableChapterImageExtraction" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableChapterImageExtraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableEmbeddedEpisodeInfos" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableEmbeddedEpisodeInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableEmbeddedTitles" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableEmbeddedTitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInternetProviders" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableInternetProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePhotos" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enablePhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRealtimeMonitor" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "enableRealtimeMonitor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtractChapterImagesDuringLibraryScan" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "extractChapterImagesDuringLibraryScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalMetadataReaderOrder" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "localMetadataReaderOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" }),
        __metadata("design:type", String)
    ], LibraryOptions.prototype, "metadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataSavers" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "metadataSavers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathInfos", elemType: MediaPathInfo }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "pathInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" }),
        __metadata("design:type", String)
    ], LibraryOptions.prototype, "preferredMetadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequirePerfectSubtitleMatch" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "requirePerfectSubtitleMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SaveLocalMetadata" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "saveLocalMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SaveSubtitlesWithMedia" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "saveSubtitlesWithMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeasonZeroDisplayName" }),
        __metadata("design:type", String)
    ], LibraryOptions.prototype, "seasonZeroDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkipSubtitlesIfAudioTrackMatches" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "skipSubtitlesIfAudioTrackMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkipSubtitlesIfEmbeddedSubtitlesPresent" }),
        __metadata("design:type", Boolean)
    ], LibraryOptions.prototype, "skipSubtitlesIfEmbeddedSubtitlesPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleDownloadLanguages" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "subtitleDownloadLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubtitleFetcherOrder" }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "subtitleFetcherOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypeOptions", elemType: TypeOptions }),
        __metadata("design:type", Array)
    ], LibraryOptions.prototype, "typeOptions", void 0);
    return LibraryOptions;
}(SpeakeasyBase));
export { LibraryOptions };
