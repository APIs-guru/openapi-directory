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
import { VideoSuggestionsTagSuggestion } from "./videosuggestionstagsuggestion";
export var VideoSuggestionsEditorSuggestionsEnum;
(function (VideoSuggestionsEditorSuggestionsEnum) {
    VideoSuggestionsEditorSuggestionsEnum["VideoAutoLevels"] = "videoAutoLevels";
    VideoSuggestionsEditorSuggestionsEnum["VideoStabilize"] = "videoStabilize";
    VideoSuggestionsEditorSuggestionsEnum["VideoCrop"] = "videoCrop";
    VideoSuggestionsEditorSuggestionsEnum["AudioQuietAudioSwap"] = "audioQuietAudioSwap";
})(VideoSuggestionsEditorSuggestionsEnum || (VideoSuggestionsEditorSuggestionsEnum = {}));
export var VideoSuggestionsProcessingErrorsEnum;
(function (VideoSuggestionsProcessingErrorsEnum) {
    VideoSuggestionsProcessingErrorsEnum["AudioFile"] = "audioFile";
    VideoSuggestionsProcessingErrorsEnum["ImageFile"] = "imageFile";
    VideoSuggestionsProcessingErrorsEnum["ProjectFile"] = "projectFile";
    VideoSuggestionsProcessingErrorsEnum["NotAVideoFile"] = "notAVideoFile";
    VideoSuggestionsProcessingErrorsEnum["DocFile"] = "docFile";
    VideoSuggestionsProcessingErrorsEnum["ArchiveFile"] = "archiveFile";
    VideoSuggestionsProcessingErrorsEnum["UnsupportedSpatialAudioLayout"] = "unsupportedSpatialAudioLayout";
})(VideoSuggestionsProcessingErrorsEnum || (VideoSuggestionsProcessingErrorsEnum = {}));
export var VideoSuggestionsProcessingHintsEnum;
(function (VideoSuggestionsProcessingHintsEnum) {
    VideoSuggestionsProcessingHintsEnum["NonStreamableMov"] = "nonStreamableMov";
    VideoSuggestionsProcessingHintsEnum["SendBestQualityVideo"] = "sendBestQualityVideo";
    VideoSuggestionsProcessingHintsEnum["SphericalVideo"] = "sphericalVideo";
    VideoSuggestionsProcessingHintsEnum["SpatialAudio"] = "spatialAudio";
    VideoSuggestionsProcessingHintsEnum["VrVideo"] = "vrVideo";
    VideoSuggestionsProcessingHintsEnum["HdrVideo"] = "hdrVideo";
})(VideoSuggestionsProcessingHintsEnum || (VideoSuggestionsProcessingHintsEnum = {}));
export var VideoSuggestionsProcessingWarningsEnum;
(function (VideoSuggestionsProcessingWarningsEnum) {
    VideoSuggestionsProcessingWarningsEnum["UnknownContainer"] = "unknownContainer";
    VideoSuggestionsProcessingWarningsEnum["UnknownVideoCodec"] = "unknownVideoCodec";
    VideoSuggestionsProcessingWarningsEnum["UnknownAudioCodec"] = "unknownAudioCodec";
    VideoSuggestionsProcessingWarningsEnum["InconsistentResolution"] = "inconsistentResolution";
    VideoSuggestionsProcessingWarningsEnum["HasEditlist"] = "hasEditlist";
    VideoSuggestionsProcessingWarningsEnum["ProblematicVideoCodec"] = "problematicVideoCodec";
    VideoSuggestionsProcessingWarningsEnum["ProblematicAudioCodec"] = "problematicAudioCodec";
    VideoSuggestionsProcessingWarningsEnum["UnsupportedVrStereoMode"] = "unsupportedVrStereoMode";
    VideoSuggestionsProcessingWarningsEnum["UnsupportedSphericalProjectionType"] = "unsupportedSphericalProjectionType";
    VideoSuggestionsProcessingWarningsEnum["UnsupportedHdrPixelFormat"] = "unsupportedHdrPixelFormat";
    VideoSuggestionsProcessingWarningsEnum["UnsupportedHdrColorMetadata"] = "unsupportedHdrColorMetadata";
    VideoSuggestionsProcessingWarningsEnum["ProblematicHdrLookupTable"] = "problematicHdrLookupTable";
})(VideoSuggestionsProcessingWarningsEnum || (VideoSuggestionsProcessingWarningsEnum = {}));
// VideoSuggestions
/**
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
**/
var VideoSuggestions = /** @class */ (function (_super) {
    __extends(VideoSuggestions, _super);
    function VideoSuggestions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorSuggestions" }),
        __metadata("design:type", Array)
    ], VideoSuggestions.prototype, "editorSuggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingErrors" }),
        __metadata("design:type", Array)
    ], VideoSuggestions.prototype, "processingErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingHints" }),
        __metadata("design:type", Array)
    ], VideoSuggestions.prototype, "processingHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingWarnings" }),
        __metadata("design:type", Array)
    ], VideoSuggestions.prototype, "processingWarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagSuggestions", elemType: VideoSuggestionsTagSuggestion }),
        __metadata("design:type", Array)
    ], VideoSuggestions.prototype, "tagSuggestions", void 0);
    return VideoSuggestions;
}(SpeakeasyBase));
export { VideoSuggestions };
