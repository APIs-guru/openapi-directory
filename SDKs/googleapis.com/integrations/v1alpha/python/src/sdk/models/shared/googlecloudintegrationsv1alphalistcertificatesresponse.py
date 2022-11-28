from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListCertificatesResponse:
    r"""GoogleCloudIntegrationsV1alphaListCertificatesResponse
    Response to list Certificates.
    """
    
    certificates: Optional[List[GoogleCloudIntegrationsV1alphaCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
