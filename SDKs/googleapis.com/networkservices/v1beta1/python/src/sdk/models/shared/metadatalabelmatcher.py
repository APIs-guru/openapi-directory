from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetadataLabelMatcherMetadataLabelMatchCriteriaEnum(str, Enum):
    METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
    MATCH_ANY = "MATCH_ANY"
    MATCH_ALL = "MATCH_ALL"


@dataclass_json
@dataclass
class MetadataLabelMatcher:
    r"""MetadataLabelMatcher
    The matcher that is based on node metadata presented by xDS clients.
    """
    
    metadata_label_match_criteria: Optional[MetadataLabelMatcherMetadataLabelMatchCriteriaEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabelMatchCriteria') }})
    metadata_labels: Optional[List[MetadataLabels]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabels') }})
    
