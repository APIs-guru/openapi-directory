from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class I18nLanguage:
    r"""I18nLanguage
    An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[I18nLanguageSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
