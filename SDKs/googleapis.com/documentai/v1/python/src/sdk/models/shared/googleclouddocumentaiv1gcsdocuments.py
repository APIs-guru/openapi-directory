from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1GcsDocuments:
    r"""GoogleCloudDocumentaiV1GcsDocuments
    Specifies a set of documents on Cloud Storage.
    """
    
    documents: Optional[List[GoogleCloudDocumentaiV1GcsDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    
