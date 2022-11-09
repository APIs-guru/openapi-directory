import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoSuggestionsTagSuggestion } from "./videosuggestionstagsuggestion";

export enum VideoSuggestionsEditorSuggestionsEnum {
    VideoAutoLevels = "videoAutoLevels"
,    VideoStabilize = "videoStabilize"
,    VideoCrop = "videoCrop"
,    AudioQuietAudioSwap = "audioQuietAudioSwap"
}

export enum VideoSuggestionsProcessingErrorsEnum {
    AudioFile = "audioFile"
,    ImageFile = "imageFile"
,    ProjectFile = "projectFile"
,    NotAVideoFile = "notAVideoFile"
,    DocFile = "docFile"
,    ArchiveFile = "archiveFile"
,    UnsupportedSpatialAudioLayout = "unsupportedSpatialAudioLayout"
}

export enum VideoSuggestionsProcessingHintsEnum {
    NonStreamableMov = "nonStreamableMov"
,    SendBestQualityVideo = "sendBestQualityVideo"
,    SphericalVideo = "sphericalVideo"
,    SpatialAudio = "spatialAudio"
,    VrVideo = "vrVideo"
,    HdrVideo = "hdrVideo"
}

export enum VideoSuggestionsProcessingWarningsEnum {
    UnknownContainer = "unknownContainer"
,    UnknownVideoCodec = "unknownVideoCodec"
,    UnknownAudioCodec = "unknownAudioCodec"
,    InconsistentResolution = "inconsistentResolution"
,    HasEditlist = "hasEditlist"
,    ProblematicVideoCodec = "problematicVideoCodec"
,    ProblematicAudioCodec = "problematicAudioCodec"
,    UnsupportedVrStereoMode = "unsupportedVrStereoMode"
,    UnsupportedSphericalProjectionType = "unsupportedSphericalProjectionType"
,    UnsupportedHdrPixelFormat = "unsupportedHdrPixelFormat"
,    UnsupportedHdrColorMetadata = "unsupportedHdrColorMetadata"
,    ProblematicHdrLookupTable = "problematicHdrLookupTable"
}


// VideoSuggestions
/** 
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
**/
export class VideoSuggestions extends SpeakeasyBase {
  @Metadata({ data: "json, name=editorSuggestions" })
  editorSuggestions?: VideoSuggestionsEditorSuggestionsEnum[];

  @Metadata({ data: "json, name=processingErrors" })
  processingErrors?: VideoSuggestionsProcessingErrorsEnum[];

  @Metadata({ data: "json, name=processingHints" })
  processingHints?: VideoSuggestionsProcessingHintsEnum[];

  @Metadata({ data: "json, name=processingWarnings" })
  processingWarnings?: VideoSuggestionsProcessingWarningsEnum[];

  @Metadata({ data: "json, name=tagSuggestions", elemType: shared.VideoSuggestionsTagSuggestion })
  tagSuggestions?: VideoSuggestionsTagSuggestion[];
}
