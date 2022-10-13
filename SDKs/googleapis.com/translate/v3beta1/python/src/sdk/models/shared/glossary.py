from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import glossaryinputconfig
from . import languagecodesset
from . import languagecodepair


@dataclass_json
@dataclass
class Glossary:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    entry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryCount' }})
    input_config: Optional[glossaryinputconfig.GlossaryInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    language_codes_set: Optional[languagecodesset.LanguageCodesSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCodesSet' }})
    language_pair: Optional[languagecodepair.LanguageCodePair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languagePair' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    submit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitTime' }})
    
