from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudsecuritycenterv1beta1finding


@dataclass_json
@dataclass
class ListFindingsResponse:
    findings: Optional[List[googlecloudsecuritycenterv1beta1finding.GoogleCloudSecuritycenterV1beta1Finding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
