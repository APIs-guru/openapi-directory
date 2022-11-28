from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaMerchantCenterLinkingConfig:
    r"""GoogleCloudRetailV2betaMerchantCenterLinkingConfig
    Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.
    """
    
    links: Optional[List[GoogleCloudRetailV2betaMerchantCenterLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
