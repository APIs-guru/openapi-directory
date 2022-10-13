from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consentartifact


@dataclass_json
@dataclass
class ListConsentArtifactsResponse:
    consent_artifacts: Optional[List[consentartifact.ConsentArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifacts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
