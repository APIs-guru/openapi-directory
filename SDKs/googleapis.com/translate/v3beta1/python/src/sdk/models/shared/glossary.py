from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlossaryInput:
    r"""GlossaryInput
    Represents a glossary built from user provided data.
    """
    
    input_config: Optional[GlossaryInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    language_codes_set: Optional[LanguageCodesSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodesSet') }})
    language_pair: Optional[LanguageCodePair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languagePair') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class Glossary:
    r"""Glossary
    Represents a glossary built from user provided data.
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryCount') }})
    input_config: Optional[GlossaryInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    language_codes_set: Optional[LanguageCodesSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodesSet') }})
    language_pair: Optional[LanguageCodePair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languagePair') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    submit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitTime') }})
    
