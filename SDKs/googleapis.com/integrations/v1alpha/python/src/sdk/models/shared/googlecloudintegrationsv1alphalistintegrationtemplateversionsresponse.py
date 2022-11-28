from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse:
    r"""GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse
    Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions.
    """
    
    integration_template_versions: Optional[List[GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationTemplateVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
