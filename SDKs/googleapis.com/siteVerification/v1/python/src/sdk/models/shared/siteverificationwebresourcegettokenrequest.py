from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SiteVerificationWebResourceGettokenRequestSite:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class SiteVerificationWebResourceGettokenRequest:
    site: Optional[SiteVerificationWebResourceGettokenRequestSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    verification_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationMethod' }})
    
