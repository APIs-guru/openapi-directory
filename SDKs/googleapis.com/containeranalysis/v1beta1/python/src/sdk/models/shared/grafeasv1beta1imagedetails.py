from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1ImageDetails:
    r"""GrafeasV1beta1ImageDetails
    Details of an image occurrence.
    """
    
    derived_image: Optional[Derived] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivedImage') }})
    
