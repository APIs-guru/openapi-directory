from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class I18nRegionSnippet:
    r"""I18nRegionSnippet
    Basic details about an i18n region, such as region code and human-readable name.
    """
    
    gl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
