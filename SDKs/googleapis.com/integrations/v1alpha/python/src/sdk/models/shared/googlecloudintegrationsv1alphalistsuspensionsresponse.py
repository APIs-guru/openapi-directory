from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasuspension


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSuspensionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    suspensions: Optional[List[googlecloudintegrationsv1alphasuspension.GoogleCloudIntegrationsV1alphaSuspension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensions' }})
    
