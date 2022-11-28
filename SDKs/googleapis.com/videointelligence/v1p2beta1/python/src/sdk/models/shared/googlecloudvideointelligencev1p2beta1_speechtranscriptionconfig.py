from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig:
    r"""GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig
    Config for SPEECH_TRANSCRIPTION.
    """
    
    audio_tracks: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioTracks') }})
    diarization_speaker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diarizationSpeakerCount') }})
    enable_automatic_punctuation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutomaticPunctuation') }})
    enable_speaker_diarization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeakerDiarization') }})
    enable_word_confidence: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWordConfidence') }})
    filter_profanity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterProfanity') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    max_alternatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAlternatives') }})
    speech_contexts: Optional[List[GoogleCloudVideointelligenceV1p2beta1SpeechContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechContexts') }})
    
