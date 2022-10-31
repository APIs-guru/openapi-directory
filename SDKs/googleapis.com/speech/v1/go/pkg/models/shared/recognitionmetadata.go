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
	AudioTopic               *string                                     `json:"audioTopic,omitempty"`
	IndustryNaicsCodeOfAudio *int64                                      `json:"industryNaicsCodeOfAudio,omitempty"`
	InteractionType          *RecognitionMetadataInteractionTypeEnum     `json:"interactionType,omitempty"`
	MicrophoneDistance       *RecognitionMetadataMicrophoneDistanceEnum  `json:"microphoneDistance,omitempty"`
	OriginalMediaType        *RecognitionMetadataOriginalMediaTypeEnum   `json:"originalMediaType,omitempty"`
	OriginalMimeType         *string                                     `json:"originalMimeType,omitempty"`
	RecordingDeviceName      *string                                     `json:"recordingDeviceName,omitempty"`
	RecordingDeviceType      *RecognitionMetadataRecordingDeviceTypeEnum `json:"recordingDeviceType,omitempty"`
}
