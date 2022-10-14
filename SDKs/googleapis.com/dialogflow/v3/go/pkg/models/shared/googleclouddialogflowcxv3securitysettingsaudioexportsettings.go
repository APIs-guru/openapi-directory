package shared

type GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum string

const (
	GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnumAudioFormatUnspecified GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum = "AUDIO_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnumMulaw                  GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum = "MULAW"
	GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnumMp3                    GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum = "MP3"
	GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnumOgg                    GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum = "OGG"
)

type GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettings struct {
	AudioExportPattern   *string                                                                      `json:"audioExportPattern,omitempty"`
	AudioFormat          *GoogleCloudDialogflowCxV3SecuritySettingsAudioExportSettingsAudioFormatEnum `json:"audioFormat,omitempty"`
	EnableAudioRedaction *bool                                                                        `json:"enableAudioRedaction,omitempty"`
	GcsBucket            *string                                                                      `json:"gcsBucket,omitempty"`
}
