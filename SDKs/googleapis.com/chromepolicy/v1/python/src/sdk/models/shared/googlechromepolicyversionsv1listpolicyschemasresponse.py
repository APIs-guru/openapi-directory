from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1policyschema


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ListPolicySchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    policy_schemas: Optional[List[googlechromepolicyversionsv1policyschema.GoogleChromePolicyVersionsV1PolicySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policySchemas' }})
    
