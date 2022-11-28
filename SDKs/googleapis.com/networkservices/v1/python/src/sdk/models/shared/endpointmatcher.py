from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointMatcher:
    r"""EndpointMatcher
    A definition of a matcher that selects endpoints to which the policies should be applied.
    """
    
    metadata_label_matcher: Optional[EndpointMatcherMetadataLabelMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabelMatcher') }})
    
