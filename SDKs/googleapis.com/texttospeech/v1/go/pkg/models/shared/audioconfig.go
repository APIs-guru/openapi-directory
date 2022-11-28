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

// AudioConfig
// Description of audio data to be synthesized.
type AudioConfig struct {
	AudioEncoding    *AudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	EffectsProfileID []string                      `json:"effectsProfileId,omitempty"`
	Pitch            *float64                      `json:"pitch,omitempty"`
	SampleRateHertz  *int32                        `json:"sampleRateHertz,omitempty"`
	SpeakingRate     *float64                      `json:"speakingRate,omitempty"`
	VolumeGainDb     *float64                      `json:"volumeGainDb,omitempty"`
}
