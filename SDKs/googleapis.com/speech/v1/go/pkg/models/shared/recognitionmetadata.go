package shared

type RecognitionMetadataInteractionTypeEnum string

const (
	RecognitionMetadataInteractionTypeEnumInteractionTypeUnspecified RecognitionMetadataInteractionTypeEnum = "INTERACTION_TYPE_UNSPECIFIED"
	RecognitionMetadataInteractionTypeEnumDiscussion                 RecognitionMetadataInteractionTypeEnum = "DISCUSSION"
	RecognitionMetadataInteractionTypeEnumPresentation               RecognitionMetadataInteractionTypeEnum = "PRESENTATION"
	RecognitionMetadataInteractionTypeEnumPhoneCall                  RecognitionMetadataInteractionTypeEnum = "PHONE_CALL"
	RecognitionMetadataInteractionTypeEnumVoicemail                  RecognitionMetadataInteractionTypeEnum = "VOICEMAIL"
	RecognitionMetadataInteractionTypeEnumProfessionallyProduced     RecognitionMetadataInteractionTypeEnum = "PROFESSIONALLY_PRODUCED"
	RecognitionMetadataInteractionTypeEnumVoiceSearch                RecognitionMetadataInteractionTypeEnum = "VOICE_SEARCH"
	RecognitionMetadataInteractionTypeEnumVoiceCommand               RecognitionMetadataInteractionTypeEnum = "VOICE_COMMAND"
	RecognitionMetadataInteractionTypeEnumDictation                  RecognitionMetadataInteractionTypeEnum = "DICTATION"
)

type RecognitionMetadataMicrophoneDistanceEnum string

const (
	RecognitionMetadataMicrophoneDistanceEnumMicrophoneDistanceUnspecified RecognitionMetadataMicrophoneDistanceEnum = "MICROPHONE_DISTANCE_UNSPECIFIED"
	RecognitionMetadataMicrophoneDistanceEnumNearfield                     RecognitionMetadataMicrophoneDistanceEnum = "NEARFIELD"
	RecognitionMetadataMicrophoneDistanceEnumMidfield                      RecognitionMetadataMicrophoneDistanceEnum = "MIDFIELD"
	RecognitionMetadataMicrophoneDistanceEnumFarfield                      RecognitionMetadataMicrophoneDistanceEnum = "FARFIELD"
)

type RecognitionMetadataOriginalMediaTypeEnum string

const (
	RecognitionMetadataOriginalMediaTypeEnumOriginalMediaTypeUnspecified RecognitionMetadataOriginalMediaTypeEnum = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED"
	RecognitionMetadataOriginalMediaTypeEnumAudio                        RecognitionMetadataOriginalMediaTypeEnum = "AUDIO"
	RecognitionMetadataOriginalMediaTypeEnumVideo                        RecognitionMetadataOriginalMediaTypeEnum = "VIDEO"
)

type RecognitionMetadataRecordingDeviceTypeEnum string

const (
	RecognitionMetadataRecordingDeviceTypeEnumRecordingDeviceTypeUnspecified RecognitionMetadataRecordingDeviceTypeEnum = "RECORDING_DEVICE_TYPE_UNSPECIFIED"
	RecognitionMetadataRecordingDeviceTypeEnumSmartphone                     RecognitionMetadataRecordingDeviceTypeEnum = "SMARTPHONE"
	RecognitionMetadataRecordingDeviceTypeEnumPc                             RecognitionMetadataRecordingDeviceTypeEnum = "PC"
	RecognitionMetadataRecordingDeviceTypeEnumPhoneLine                      RecognitionMetadataRecordingDeviceTypeEnum = "PHONE_LINE"
	RecognitionMetadataRecordingDeviceTypeEnumVehicle                        RecognitionMetadataRecordingDeviceTypeEnum = "VEHICLE"
	RecognitionMetadataRecordingDeviceTypeEnumOtherOutdoorDevice             RecognitionMetadataRecordingDeviceTypeEnum = "OTHER_OUTDOOR_DEVICE"
	RecognitionMetadataRecordingDeviceTypeEnumOtherIndoorDevice              RecognitionMetadataRecordingDeviceTypeEnum = "OTHER_INDOOR_DEVICE"
)

type RecognitionMetadata struct {
	AudioTopic               *string                                     `json:"audioTopic"`
	IndustryNaicsCodeOfAudio *int64                                      `json:"industryNaicsCodeOfAudio"`
	InteractionType          *RecognitionMetadataInteractionTypeEnum     `json:"interactionType"`
	MicrophoneDistance       *RecognitionMetadataMicrophoneDistanceEnum  `json:"microphoneDistance"`
	OriginalMediaType        *RecognitionMetadataOriginalMediaTypeEnum   `json:"originalMediaType"`
	OriginalMimeType         *string                                     `json:"originalMimeType"`
	RecordingDeviceName      *string                                     `json:"recordingDeviceName"`
	RecordingDeviceType      *RecognitionMetadataRecordingDeviceTypeEnum `json:"recordingDeviceType"`
}
