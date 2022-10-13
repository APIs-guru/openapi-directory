from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasfdcinstance


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sfdc_instances: Optional[List[googlecloudintegrationsv1alphasfdcinstance.GoogleCloudIntegrationsV1alphaSfdcInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sfdcInstances' }})
    
