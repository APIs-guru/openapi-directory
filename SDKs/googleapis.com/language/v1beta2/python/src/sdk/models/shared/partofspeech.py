from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PartOfSpeechAspectEnum(str, Enum):
    ASPECT_UNKNOWN = "ASPECT_UNKNOWN"
    PERFECTIVE = "PERFECTIVE"
    IMPERFECTIVE = "IMPERFECTIVE"
    PROGRESSIVE = "PROGRESSIVE"

class PartOfSpeechCaseEnum(str, Enum):
    CASE_UNKNOWN = "CASE_UNKNOWN"
    ACCUSATIVE = "ACCUSATIVE"
    ADVERBIAL = "ADVERBIAL"
    COMPLEMENTIVE = "COMPLEMENTIVE"
    DATIVE = "DATIVE"
    GENITIVE = "GENITIVE"
    INSTRUMENTAL = "INSTRUMENTAL"
    LOCATIVE = "LOCATIVE"
    NOMINATIVE = "NOMINATIVE"
    OBLIQUE = "OBLIQUE"
    PARTITIVE = "PARTITIVE"
    PREPOSITIONAL = "PREPOSITIONAL"
    REFLEXIVE_CASE = "REFLEXIVE_CASE"
    RELATIVE_CASE = "RELATIVE_CASE"
    VOCATIVE = "VOCATIVE"

class PartOfSpeechFormEnum(str, Enum):
    FORM_UNKNOWN = "FORM_UNKNOWN"
    ADNOMIAL = "ADNOMIAL"
    AUXILIARY = "AUXILIARY"
    COMPLEMENTIZER = "COMPLEMENTIZER"
    FINAL_ENDING = "FINAL_ENDING"
    GERUND = "GERUND"
    REALIS = "REALIS"
    IRREALIS = "IRREALIS"
    SHORT = "SHORT"
    LONG = "LONG"
    ORDER = "ORDER"
    SPECIFIC = "SPECIFIC"

class PartOfSpeechGenderEnum(str, Enum):
    GENDER_UNKNOWN = "GENDER_UNKNOWN"
    FEMININE = "FEMININE"
    MASCULINE = "MASCULINE"
    NEUTER = "NEUTER"

class PartOfSpeechMoodEnum(str, Enum):
    MOOD_UNKNOWN = "MOOD_UNKNOWN"
    CONDITIONAL_MOOD = "CONDITIONAL_MOOD"
    IMPERATIVE = "IMPERATIVE"
    INDICATIVE = "INDICATIVE"
    INTERROGATIVE = "INTERROGATIVE"
    JUSSIVE = "JUSSIVE"
    SUBJUNCTIVE = "SUBJUNCTIVE"

class PartOfSpeechNumberEnum(str, Enum):
    NUMBER_UNKNOWN = "NUMBER_UNKNOWN"
    SINGULAR = "SINGULAR"
    PLURAL = "PLURAL"
    DUAL = "DUAL"

class PartOfSpeechPersonEnum(str, Enum):
    PERSON_UNKNOWN = "PERSON_UNKNOWN"
    FIRST = "FIRST"
    SECOND = "SECOND"
    THIRD = "THIRD"
    REFLEXIVE_PERSON = "REFLEXIVE_PERSON"

class PartOfSpeechProperEnum(str, Enum):
    PROPER_UNKNOWN = "PROPER_UNKNOWN"
    PROPER = "PROPER"
    NOT_PROPER = "NOT_PROPER"

class PartOfSpeechReciprocityEnum(str, Enum):
    RECIPROCITY_UNKNOWN = "RECIPROCITY_UNKNOWN"
    RECIPROCAL = "RECIPROCAL"
    NON_RECIPROCAL = "NON_RECIPROCAL"

class PartOfSpeechTagEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ADJ = "ADJ"
    ADP = "ADP"
    ADV = "ADV"
    CONJ = "CONJ"
    DET = "DET"
    NOUN = "NOUN"
    NUM = "NUM"
    PRON = "PRON"
    PRT = "PRT"
    PUNCT = "PUNCT"
    VERB = "VERB"
    X = "X"
    AFFIX = "AFFIX"

class PartOfSpeechTenseEnum(str, Enum):
    TENSE_UNKNOWN = "TENSE_UNKNOWN"
    CONDITIONAL_TENSE = "CONDITIONAL_TENSE"
    FUTURE = "FUTURE"
    PAST = "PAST"
    PRESENT = "PRESENT"
    IMPERFECT = "IMPERFECT"
    PLUPERFECT = "PLUPERFECT"

class PartOfSpeechVoiceEnum(str, Enum):
    VOICE_UNKNOWN = "VOICE_UNKNOWN"
    ACTIVE = "ACTIVE"
    CAUSATIVE = "CAUSATIVE"
    PASSIVE = "PASSIVE"


@dataclass_json
@dataclass
class PartOfSpeech:
    aspect: Optional[PartOfSpeechAspectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspect' }})
    case: Optional[PartOfSpeechCaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'case' }})
    form: Optional[PartOfSpeechFormEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    gender: Optional[PartOfSpeechGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    mood: Optional[PartOfSpeechMoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mood' }})
    number: Optional[PartOfSpeechNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    person: Optional[PartOfSpeechPersonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    proper: Optional[PartOfSpeechProperEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proper' }})
    reciprocity: Optional[PartOfSpeechReciprocityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reciprocity' }})
    tag: Optional[PartOfSpeechTagEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    tense: Optional[PartOfSpeechTenseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tense' }})
    voice: Optional[PartOfSpeechVoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    
