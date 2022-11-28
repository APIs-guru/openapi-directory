from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeatureDescription:
    r"""FeatureDescription
    A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
    """
    
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
