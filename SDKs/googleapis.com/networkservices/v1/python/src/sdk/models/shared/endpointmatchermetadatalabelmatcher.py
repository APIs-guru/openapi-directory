from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointmatchermetadatalabelmatchermetadatalabels

class EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum(str, Enum):
    METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
    MATCH_ANY = "MATCH_ANY"
    MATCH_ALL = "MATCH_ALL"


@dataclass_json
@dataclass
class EndpointMatcherMetadataLabelMatcher:
    metadata_label_match_criteria: Optional[EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLabelMatchCriteria' }})
    metadata_labels: Optional[List[endpointmatchermetadatalabelmatchermetadatalabels.EndpointMatcherMetadataLabelMatcherMetadataLabels]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataLabels' }})
    
