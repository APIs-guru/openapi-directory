import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSuggestionsTagSuggestion } from "./videosuggestionstagsuggestion";
export declare enum VideoSuggestionsEditorSuggestionsEnum {
    VideoAutoLevels = "videoAutoLevels",
    VideoStabilize = "videoStabilize",
    VideoCrop = "videoCrop",
    AudioQuietAudioSwap = "audioQuietAudioSwap"
}
export declare enum VideoSuggestionsProcessingErrorsEnum {
    AudioFile = "audioFile",
    ImageFile = "imageFile",
    ProjectFile = "projectFile",
    NotAVideoFile = "notAVideoFile",
    DocFile = "docFile",
    ArchiveFile = "archiveFile",
    UnsupportedSpatialAudioLayout = "unsupportedSpatialAudioLayout"
}
export declare enum VideoSuggestionsProcessingHintsEnum {
    NonStreamableMov = "nonStreamableMov",
    SendBestQualityVideo = "sendBestQualityVideo",
    SphericalVideo = "sphericalVideo",
    SpatialAudio = "spatialAudio",
    VrVideo = "vrVideo",
    HdrVideo = "hdrVideo"
}
export declare enum VideoSuggestionsProcessingWarningsEnum {
    UnknownContainer = "unknownContainer",
    UnknownVideoCodec = "unknownVideoCodec",
    UnknownAudioCodec = "unknownAudioCodec",
    InconsistentResolution = "inconsistentResolution",
    HasEditlist = "hasEditlist",
    ProblematicVideoCodec = "problematicVideoCodec",
    ProblematicAudioCodec = "problematicAudioCodec",
    UnsupportedVrStereoMode = "unsupportedVrStereoMode",
    UnsupportedSphericalProjectionType = "unsupportedSphericalProjectionType",
    UnsupportedHdrPixelFormat = "unsupportedHdrPixelFormat",
    UnsupportedHdrColorMetadata = "unsupportedHdrColorMetadata",
    ProblematicHdrLookupTable = "problematicHdrLookupTable"
}
/**
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
**/
export declare class VideoSuggestions extends SpeakeasyBase {
    editorSuggestions?: VideoSuggestionsEditorSuggestionsEnum[];
    processingErrors?: VideoSuggestionsProcessingErrorsEnum[];
    processingHints?: VideoSuggestionsProcessingHintsEnum[];
    processingWarnings?: VideoSuggestionsProcessingWarningsEnum[];
    tagSuggestions?: VideoSuggestionsTagSuggestion[];
}
