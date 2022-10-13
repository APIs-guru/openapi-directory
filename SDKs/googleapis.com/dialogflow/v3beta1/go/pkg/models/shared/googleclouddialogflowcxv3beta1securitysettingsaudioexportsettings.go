package shared

type GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum string

const (
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumAudioFormatUnspecified GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "AUDIO_FORMAT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumMulaw                  GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "MULAW"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumMp3                    GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "MP3"
	GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnumOgg                    GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum = "OGG"
)

type GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings struct {
	AudioExportPattern   *string                                                                           `json:"audioExportPattern"`
	AudioFormat          *GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum `json:"audioFormat"`
	EnableAudioRedaction *bool                                                                             `json:"enableAudioRedaction"`
	GcsBucket            *string                                                                           `json:"gcsBucket"`
}
