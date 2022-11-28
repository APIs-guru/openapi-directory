from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ReloadDocumentRequest:
    r"""GoogleCloudDialogflowV2beta1ReloadDocumentRequest
    Request message for Documents.ReloadDocument.
    """
    
    gcs_source: Optional[GoogleCloudDialogflowV2beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importGcsCustomMetadata') }})
    
