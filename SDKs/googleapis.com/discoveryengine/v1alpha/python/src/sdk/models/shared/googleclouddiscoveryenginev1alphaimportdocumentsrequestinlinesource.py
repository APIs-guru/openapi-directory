from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource:
    r"""GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource
    The inline source for the input config for ImportDocuments method.
    """
    
    documents: Optional[List[GoogleCloudDiscoveryengineV1alphaDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    
