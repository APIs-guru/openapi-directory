from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdBlockingConfiguration:
    r"""AdBlockingConfiguration
    Campaign ad blocking settings.
    """
    
    click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    creative_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeBundleId') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    override_click_through_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideClickThroughUrl') }})
    
