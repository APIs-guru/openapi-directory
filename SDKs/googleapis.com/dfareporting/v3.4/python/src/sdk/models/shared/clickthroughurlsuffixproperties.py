from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClickThroughURLSuffixProperties:
    r"""ClickThroughURLSuffixProperties
    Click Through URL Suffix settings.
    """
    
    click_through_url_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrlSuffix') }})
    override_inherited_suffix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideInheritedSuffix') }})
    
