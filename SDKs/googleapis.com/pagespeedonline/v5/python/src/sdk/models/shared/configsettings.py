from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigSettings:
    r"""ConfigSettings
    Message containing the configuration settings for the Lighthouse run.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    emulated_form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emulatedFormFactor') }})
    form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    only_categories: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyCategories') }})
    
