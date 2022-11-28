from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor
    Information about the claim author.
    """
    
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    job_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTitle') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    same_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sameAs') }})
    
