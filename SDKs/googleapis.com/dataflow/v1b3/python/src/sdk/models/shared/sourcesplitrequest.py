from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceSplitRequest:
    r"""SourceSplitRequest
    Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used \"as is\". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.
    """
    
    options: Optional[SourceSplitOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
