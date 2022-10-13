from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domaincalls


@dataclass_json
@dataclass
class DomainCallEvidence:
    top_http_call_domains: Optional[List[domaincalls.DomainCalls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topHttpCallDomains' }})
    total_http_call_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalHttpCallCount' }})
    
