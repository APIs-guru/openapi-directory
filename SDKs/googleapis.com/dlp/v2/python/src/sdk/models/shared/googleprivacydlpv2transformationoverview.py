from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2transformationsummary


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationOverview:
    transformation_summaries: Optional[List[googleprivacydlpv2transformationsummary.GooglePrivacyDlpV2TransformationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformationSummaries' }})
    transformed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformedBytes' }})
    
