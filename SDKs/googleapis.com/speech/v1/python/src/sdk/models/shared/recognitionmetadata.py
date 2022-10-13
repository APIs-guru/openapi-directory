from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RecognitionMetadataInteractionTypeEnum(str, Enum):
    INTERACTION_TYPE_UNSPECIFIED = "INTERACTION_TYPE_UNSPECIFIED"
    DISCUSSION = "DISCUSSION"
    PRESENTATION = "PRESENTATION"
    PHONE_CALL = "PHONE_CALL"
    VOICEMAIL = "VOICEMAIL"
    PROFESSIONALLY_PRODUCED = "PROFESSIONALLY_PRODUCED"
    VOICE_SEARCH = "VOICE_SEARCH"
    VOICE_COMMAND = "VOICE_COMMAND"
    DICTATION = "DICTATION"

class RecognitionMetadataMicrophoneDistanceEnum(str, Enum):
    MICROPHONE_DISTANCE_UNSPECIFIED = "MICROPHONE_DISTANCE_UNSPECIFIED"
    NEARFIELD = "NEARFIELD"
    MIDFIELD = "MIDFIELD"
    FARFIELD = "FARFIELD"

class RecognitionMetadataOriginalMediaTypeEnum(str, Enum):
    ORIGINAL_MEDIA_TYPE_UNSPECIFIED = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED"
    AUDIO = "AUDIO"
    VIDEO = "VIDEO"

class RecognitionMetadataRecordingDeviceTypeEnum(str, Enum):
    RECORDING_DEVICE_TYPE_UNSPECIFIED = "RECORDING_DEVICE_TYPE_UNSPECIFIED"
    SMARTPHONE = "SMARTPHONE"
    PC = "PC"
    PHONE_LINE = "PHONE_LINE"
    VEHICLE = "VEHICLE"
    OTHER_OUTDOOR_DEVICE = "OTHER_OUTDOOR_DEVICE"
    OTHER_INDOOR_DEVICE = "OTHER_INDOOR_DEVICE"


@dataclass_json
@dataclass
class RecognitionMetadata:
    audio_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioTopic' }})
    industry_naics_code_of_audio: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'industryNaicsCodeOfAudio' }})
    interaction_type: Optional[RecognitionMetadataInteractionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionType' }})
    microphone_distance: Optional[RecognitionMetadataMicrophoneDistanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microphoneDistance' }})
    original_media_type: Optional[RecognitionMetadataOriginalMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalMediaType' }})
    original_mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalMimeType' }})
    recording_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingDeviceName' }})
    recording_device_type: Optional[RecognitionMetadataRecordingDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingDeviceType' }})
    
