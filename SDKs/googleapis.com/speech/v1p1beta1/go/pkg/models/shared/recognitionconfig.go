package shared

type RecognitionConfigEncodingEnum string

const (
	RecognitionConfigEncodingEnumEncodingUnspecified RecognitionConfigEncodingEnum = "ENCODING_UNSPECIFIED"
	RecognitionConfigEncodingEnumLinear16            RecognitionConfigEncodingEnum = "LINEAR16"
	RecognitionConfigEncodingEnumFlac                RecognitionConfigEncodingEnum = "FLAC"
	RecognitionConfigEncodingEnumMulaw               RecognitionConfigEncodingEnum = "MULAW"
	RecognitionConfigEncodingEnumAmr                 RecognitionConfigEncodingEnum = "AMR"
	RecognitionConfigEncodingEnumAmrWb               RecognitionConfigEncodingEnum = "AMR_WB"
	RecognitionConfigEncodingEnumOggOpus             RecognitionConfigEncodingEnum = "OGG_OPUS"
	RecognitionConfigEncodingEnumSpeexWithHeaderByte RecognitionConfigEncodingEnum = "SPEEX_WITH_HEADER_BYTE"
	RecognitionConfigEncodingEnumMp3                 RecognitionConfigEncodingEnum = "MP3"
	RecognitionConfigEncodingEnumWebmOpus            RecognitionConfigEncodingEnum = "WEBM_OPUS"
)

type RecognitionConfig struct {
	Adaptation                          *SpeechAdaptation              `json:"adaptation,omitempty"`
	AlternativeLanguageCodes            []string                       `json:"alternativeLanguageCodes,omitempty"`
	AudioChannelCount                   *int32                         `json:"audioChannelCount,omitempty"`
	DiarizationConfig                   *SpeakerDiarizationConfig      `json:"diarizationConfig,omitempty"`
	DiarizationSpeakerCount             *int32                         `json:"diarizationSpeakerCount,omitempty"`
	EnableAutomaticPunctuation          *bool                          `json:"enableAutomaticPunctuation,omitempty"`
	EnableSeparateRecognitionPerChannel *bool                          `json:"enableSeparateRecognitionPerChannel,omitempty"`
	EnableSpeakerDiarization            *bool                          `json:"enableSpeakerDiarization,omitempty"`
	EnableSpokenEmojis                  *bool                          `json:"enableSpokenEmojis,omitempty"`
	EnableSpokenPunctuation             *bool                          `json:"enableSpokenPunctuation,omitempty"`
	EnableWordConfidence                *bool                          `json:"enableWordConfidence,omitempty"`
	EnableWordTimeOffsets               *bool                          `json:"enableWordTimeOffsets,omitempty"`
	Encoding                            *RecognitionConfigEncodingEnum `json:"encoding,omitempty"`
	LanguageCode                        *string                        `json:"languageCode,omitempty"`
	MaxAlternatives                     *int32                         `json:"maxAlternatives,omitempty"`
	Metadata                            *RecognitionMetadata           `json:"metadata,omitempty"`
	Model                               *string                        `json:"model,omitempty"`
	ProfanityFilter                     *bool                          `json:"profanityFilter,omitempty"`
	SampleRateHertz                     *int32                         `json:"sampleRateHertz,omitempty"`
	SpeechContexts                      []SpeechContext                `json:"speechContexts,omitempty"`
	TranscriptNormalization             *TranscriptNormalization       `json:"transcriptNormalization,omitempty"`
	UseEnhanced                         *bool                          `json:"useEnhanced,omitempty"`
}
