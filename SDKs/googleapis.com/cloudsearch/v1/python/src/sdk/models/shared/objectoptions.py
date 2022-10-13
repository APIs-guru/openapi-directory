from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectdisplayoptions
from . import freshnessoptions


@dataclass_json
@dataclass
class ObjectOptions:
    display_options: Optional[objectdisplayoptions.ObjectDisplayOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOptions' }})
    freshness_options: Optional[freshnessoptions.FreshnessOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freshnessOptions' }})
    suggestion_filtering_operators: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionFilteringOperators' }})
    
