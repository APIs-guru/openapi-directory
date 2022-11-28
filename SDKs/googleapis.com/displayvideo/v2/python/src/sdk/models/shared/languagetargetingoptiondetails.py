from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LanguageTargetingOptionDetails:
    r"""LanguageTargetingOptionDetails
    Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
