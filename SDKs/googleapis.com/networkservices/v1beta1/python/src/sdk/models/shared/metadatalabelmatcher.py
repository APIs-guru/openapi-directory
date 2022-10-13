from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metadatalabels

class MetadataLabelMatcherMetadataLabelMatchCriteriaEnum(str, Enum):
    METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
    MATCH_ANY = "MATCH_ANY"
    MATCH_ALL = "MATCH_ALL"


@dataclass_json
@dataclass
class MetadataLabelMatcher:
    metadata_label_match_criteria: Optional[MetadataLabelMatcherMetadataLabelMatchCriteriaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLabelMatchCriteria' }})
    metadata_labels: Optional[List[metadatalabels.MetadataLabels]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLabels' }})
    
