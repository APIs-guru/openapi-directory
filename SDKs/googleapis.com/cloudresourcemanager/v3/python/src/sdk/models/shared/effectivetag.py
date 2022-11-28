from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EffectiveTag:
    r"""EffectiveTag
    An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
    """
    
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited') }})
    namespaced_tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedTagKey') }})
    namespaced_tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedTagValue') }})
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagKey') }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValue') }})
    
