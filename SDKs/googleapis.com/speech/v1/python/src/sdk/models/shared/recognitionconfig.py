from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import speechadaptation
from . import speakerdiarizationconfig
from . import recognitionmetadata
from . import speechcontext

class RecognitionConfigEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    FLAC = "FLAC"
    MULAW = "MULAW"
    AMR = "AMR"
    AMR_WB = "AMR_WB"
    OGG_OPUS = "OGG_OPUS"
    SPEEX_WITH_HEADER_BYTE = "SPEEX_WITH_HEADER_BYTE"
    WEBM_OPUS = "WEBM_OPUS"


@dataclass_json
@dataclass
class RecognitionConfig:
    adaptation: Optional[speechadaptation.SpeechAdaptation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adaptation' }})
    alternative_language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeLanguageCodes' }})
    audio_channel_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioChannelCount' }})
    diarization_config: Optional[speakerdiarizationconfig.SpeakerDiarizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diarizationConfig' }})
    enable_automatic_punctuation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutomaticPunctuation' }})
    enable_separate_recognition_per_channel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSeparateRecognitionPerChannel' }})
    enable_spoken_emojis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSpokenEmojis' }})
    enable_spoken_punctuation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSpokenPunctuation' }})
    enable_word_confidence: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableWordConfidence' }})
    enable_word_time_offsets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableWordTimeOffsets' }})
    encoding: Optional[RecognitionConfigEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    max_alternatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAlternatives' }})
    metadata: Optional[recognitionmetadata.RecognitionMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    profanity_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profanityFilter' }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRateHertz' }})
    speech_contexts: Optional[List[speechcontext.SpeechContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechContexts' }})
    use_enhanced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useEnhanced' }})
    
