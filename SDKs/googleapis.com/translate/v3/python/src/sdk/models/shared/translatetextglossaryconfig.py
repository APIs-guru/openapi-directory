from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TranslateTextGlossaryConfig:
    r"""TranslateTextGlossaryConfig
    Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
    """
    
    glossary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossary') }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreCase') }})
    
