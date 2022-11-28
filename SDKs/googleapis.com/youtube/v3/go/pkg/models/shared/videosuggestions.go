package shared

type VideoSuggestionsEditorSuggestionsEnum string

const (
	VideoSuggestionsEditorSuggestionsEnumVideoAutoLevels     VideoSuggestionsEditorSuggestionsEnum = "videoAutoLevels"
	VideoSuggestionsEditorSuggestionsEnumVideoStabilize      VideoSuggestionsEditorSuggestionsEnum = "videoStabilize"
	VideoSuggestionsEditorSuggestionsEnumVideoCrop           VideoSuggestionsEditorSuggestionsEnum = "videoCrop"
	VideoSuggestionsEditorSuggestionsEnumAudioQuietAudioSwap VideoSuggestionsEditorSuggestionsEnum = "audioQuietAudioSwap"
)

type VideoSuggestionsProcessingErrorsEnum string

const (
	VideoSuggestionsProcessingErrorsEnumAudioFile                     VideoSuggestionsProcessingErrorsEnum = "audioFile"
	VideoSuggestionsProcessingErrorsEnumImageFile                     VideoSuggestionsProcessingErrorsEnum = "imageFile"
	VideoSuggestionsProcessingErrorsEnumProjectFile                   VideoSuggestionsProcessingErrorsEnum = "projectFile"
	VideoSuggestionsProcessingErrorsEnumNotAVideoFile                 VideoSuggestionsProcessingErrorsEnum = "notAVideoFile"
	VideoSuggestionsProcessingErrorsEnumDocFile                       VideoSuggestionsProcessingErrorsEnum = "docFile"
	VideoSuggestionsProcessingErrorsEnumArchiveFile                   VideoSuggestionsProcessingErrorsEnum = "archiveFile"
	VideoSuggestionsProcessingErrorsEnumUnsupportedSpatialAudioLayout VideoSuggestionsProcessingErrorsEnum = "unsupportedSpatialAudioLayout"
)

type VideoSuggestionsProcessingHintsEnum string

const (
	VideoSuggestionsProcessingHintsEnumNonStreamableMov     VideoSuggestionsProcessingHintsEnum = "nonStreamableMov"
	VideoSuggestionsProcessingHintsEnumSendBestQualityVideo VideoSuggestionsProcessingHintsEnum = "sendBestQualityVideo"
	VideoSuggestionsProcessingHintsEnumSphericalVideo       VideoSuggestionsProcessingHintsEnum = "sphericalVideo"
	VideoSuggestionsProcessingHintsEnumSpatialAudio         VideoSuggestionsProcessingHintsEnum = "spatialAudio"
	VideoSuggestionsProcessingHintsEnumVrVideo              VideoSuggestionsProcessingHintsEnum = "vrVideo"
	VideoSuggestionsProcessingHintsEnumHdrVideo             VideoSuggestionsProcessingHintsEnum = "hdrVideo"
)

type VideoSuggestionsProcessingWarningsEnum string

const (
	VideoSuggestionsProcessingWarningsEnumUnknownContainer                   VideoSuggestionsProcessingWarningsEnum = "unknownContainer"
	VideoSuggestionsProcessingWarningsEnumUnknownVideoCodec                  VideoSuggestionsProcessingWarningsEnum = "unknownVideoCodec"
	VideoSuggestionsProcessingWarningsEnumUnknownAudioCodec                  VideoSuggestionsProcessingWarningsEnum = "unknownAudioCodec"
	VideoSuggestionsProcessingWarningsEnumInconsistentResolution             VideoSuggestionsProcessingWarningsEnum = "inconsistentResolution"
	VideoSuggestionsProcessingWarningsEnumHasEditlist                        VideoSuggestionsProcessingWarningsEnum = "hasEditlist"
	VideoSuggestionsProcessingWarningsEnumProblematicVideoCodec              VideoSuggestionsProcessingWarningsEnum = "problematicVideoCodec"
	VideoSuggestionsProcessingWarningsEnumProblematicAudioCodec              VideoSuggestionsProcessingWarningsEnum = "problematicAudioCodec"
	VideoSuggestionsProcessingWarningsEnumUnsupportedVrStereoMode            VideoSuggestionsProcessingWarningsEnum = "unsupportedVrStereoMode"
	VideoSuggestionsProcessingWarningsEnumUnsupportedSphericalProjectionType VideoSuggestionsProcessingWarningsEnum = "unsupportedSphericalProjectionType"
	VideoSuggestionsProcessingWarningsEnumUnsupportedHdrPixelFormat          VideoSuggestionsProcessingWarningsEnum = "unsupportedHdrPixelFormat"
	VideoSuggestionsProcessingWarningsEnumUnsupportedHdrColorMetadata        VideoSuggestionsProcessingWarningsEnum = "unsupportedHdrColorMetadata"
	VideoSuggestionsProcessingWarningsEnumProblematicHdrLookupTable          VideoSuggestionsProcessingWarningsEnum = "problematicHdrLookupTable"
)

// VideoSuggestions
// Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
type VideoSuggestions struct {
	EditorSuggestions  []VideoSuggestionsEditorSuggestionsEnum  `json:"editorSuggestions,omitempty"`
	ProcessingErrors   []VideoSuggestionsProcessingErrorsEnum   `json:"processingErrors,omitempty"`
	ProcessingHints    []VideoSuggestionsProcessingHintsEnum    `json:"processingHints,omitempty"`
	ProcessingWarnings []VideoSuggestionsProcessingWarningsEnum `json:"processingWarnings,omitempty"`
	TagSuggestions     []VideoSuggestionsTagSuggestion          `json:"tagSuggestions,omitempty"`
}
