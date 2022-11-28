from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class I18nLanguageSnippet:
    r"""I18nLanguageSnippet
    Basic details about an i18n language, such as language code and human-readable name.
    """
    
    hl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
