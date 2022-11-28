from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DictlayerdataCommon:
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictSource:
    r"""DictlayerdataDictSource
    The source, url and attribution for this dictionary data.
    """
    
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsDerivativesSource:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsDerivatives:
    source: Optional[DictlayerdataDictWordsDerivativesSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsExamplesSource:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsExamples:
    source: Optional[DictlayerdataDictWordsExamplesSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesConjugations:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesDefinitionsExamplesSource:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesDefinitionsExamples:
    source: Optional[DictlayerdataDictWordsSensesDefinitionsExamplesSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesDefinitions:
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    examples: Optional[List[DictlayerdataDictWordsSensesDefinitionsExamples]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesSource:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesSynonymsSource:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSensesSynonyms:
    source: Optional[DictlayerdataDictWordsSensesSynonymsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSenses:
    conjugations: Optional[List[DictlayerdataDictWordsSensesConjugations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conjugations') }})
    definitions: Optional[List[DictlayerdataDictWordsSensesDefinitions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    part_of_speech: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partOfSpeech') }})
    pronunciation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronunciation') }})
    pronunciation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronunciationUrl') }})
    source: Optional[DictlayerdataDictWordsSensesSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    syllabification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syllabification') }})
    synonyms: Optional[List[DictlayerdataDictWordsSensesSynonyms]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWordsSource:
    r"""DictlayerdataDictWordsSource
    The words with different meanings but not related words, e.g. \"go\" (game) and \"go\" (verb).
    """
    
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DictlayerdataDictWords:
    derivatives: Optional[List[DictlayerdataDictWordsDerivatives]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivatives') }})
    examples: Optional[List[DictlayerdataDictWordsExamples]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    senses: Optional[List[DictlayerdataDictWordsSenses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senses') }})
    source: Optional[DictlayerdataDictWordsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclass
class DictlayerdataDict:
    source: Optional[DictlayerdataDictSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    words: Optional[List[DictlayerdataDictWords]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    

@dataclass_json
@dataclass
class Dictlayerdata:
    common: Optional[DictlayerdataCommon] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common') }})
    dict: Optional[DictlayerdataDict] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dict') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
