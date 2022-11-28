package shared

type GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum string

const (
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumAudioFormatUnspecified GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "AUDIO_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumMulaw                  GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "MULAW"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumMp3                    GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "MP3"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumOgg                    GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "OGG"
)

// GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings
// Settings for exporting audio.
type GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings struct {
	AudioExportPattern   *string                                                                           `json:"audioExportPattern,omitempty"`
	AudioFormat          *GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum `json:"audioFormat,omitempty"`
	EnableAudioRedaction *bool                                                                             `json:"enableAudioRedaction,omitempty"`
	GcsBucket            *string                                                                           `json:"gcsBucket,omitempty"`
}
