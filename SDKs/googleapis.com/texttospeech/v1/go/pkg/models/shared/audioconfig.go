package shared

type AudioConfigAudioEncodingEnum string

const (
	AudioConfigAudioEncodingEnumAudioEncodingUnspecified AudioConfigAudioEncodingEnum = "AUDIO_ENCODING_UNSPECIFIED"
	AudioConfigAudioEncodingEnumLinear16                 AudioConfigAudioEncodingEnum = "LINEAR16"
	AudioConfigAudioEncodingEnumMp3                      AudioConfigAudioEncodingEnum = "MP3"
	AudioConfigAudioEncodingEnumOggOpus                  AudioConfigAudioEncodingEnum = "OGG_OPUS"
	AudioConfigAudioEncodingEnumMulaw                    AudioConfigAudioEncodingEnum = "MULAW"
	AudioConfigAudioEncodingEnumAlaw                     AudioConfigAudioEncodingEnum = "ALAW"
)

type AudioConfig struct {
	AudioEncoding    *AudioConfigAudioEncodingEnum `json:"audioEncoding"`
	EffectsProfileID []string                      `json:"effectsProfileId"`
	Pitch            *float64                      `json:"pitch"`
	SampleRateHertz  *int32                        `json:"sampleRateHertz"`
	SpeakingRate     *float64                      `json:"speakingRate"`
	VolumeGainDb     *float64                      `json:"volumeGainDb"`
}
