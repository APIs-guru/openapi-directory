from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class I18nConfig:
    r"""I18nConfig
    If provided, i18n rewrites are enabled.
    """
    
    root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    
