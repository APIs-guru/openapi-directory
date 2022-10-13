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
	Adaptation                          *SpeechAdaptation              `json:"adaptation"`
	AlternativeLanguageCodes            []string                       `json:"alternativeLanguageCodes"`
	AudioChannelCount                   *int32                         `json:"audioChannelCount"`
	DiarizationConfig                   *SpeakerDiarizationConfig      `json:"diarizationConfig"`
	DiarizationSpeakerCount             *int32                         `json:"diarizationSpeakerCount"`
	EnableAutomaticPunctuation          *bool                          `json:"enableAutomaticPunctuation"`
	EnableSeparateRecognitionPerChannel *bool                          `json:"enableSeparateRecognitionPerChannel"`
	EnableSpeakerDiarization            *bool                          `json:"enableSpeakerDiarization"`
	EnableSpokenEmojis                  *bool                          `json:"enableSpokenEmojis"`
	EnableSpokenPunctuation             *bool                          `json:"enableSpokenPunctuation"`
	EnableWordConfidence                *bool                          `json:"enableWordConfidence"`
	EnableWordTimeOffsets               *bool                          `json:"enableWordTimeOffsets"`
	Encoding                            *RecognitionConfigEncodingEnum `json:"encoding"`
	LanguageCode                        *string                        `json:"languageCode"`
	MaxAlternatives                     *int32                         `json:"maxAlternatives"`
	Metadata                            *RecognitionMetadata           `json:"metadata"`
	Model                               *string                        `json:"model"`
	ProfanityFilter                     *bool                          `json:"profanityFilter"`
	SampleRateHertz                     *int32                         `json:"sampleRateHertz"`
	SpeechContexts                      []SpeechContext                `json:"speechContexts"`
	TranscriptNormalization             *TranscriptNormalization       `json:"transcriptNormalization"`
	UseEnhanced                         *bool                          `json:"useEnhanced"`
}
