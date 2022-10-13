from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasfdcchannel


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sfdc_channels: Optional[List[googlecloudintegrationsv1alphasfdcchannel.GoogleCloudIntegrationsV1alphaSfdcChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sfdcChannels' }})
    
