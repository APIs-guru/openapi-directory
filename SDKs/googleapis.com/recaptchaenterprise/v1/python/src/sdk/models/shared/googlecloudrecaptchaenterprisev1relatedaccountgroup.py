from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup:
    r"""GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup
    A group of related accounts.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
