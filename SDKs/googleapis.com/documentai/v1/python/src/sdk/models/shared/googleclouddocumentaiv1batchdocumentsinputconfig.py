from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1BatchDocumentsInputConfig:
    r"""GoogleCloudDocumentaiV1BatchDocumentsInputConfig
    The common config to specify a set of documents used as input.
    """
    
    gcs_documents: Optional[GoogleCloudDocumentaiV1GcsDocuments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDocuments') }})
    gcs_prefix: Optional[GoogleCloudDocumentaiV1GcsPrefix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPrefix') }})
    
