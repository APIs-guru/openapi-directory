from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ImportDocumentsRequest:
    r"""GoogleCloudDialogflowV2ImportDocumentsRequest
    Request message for Documents.ImportDocuments.
    """
    
    document_template: Optional[GoogleCloudDialogflowV2ImportDocumentTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentTemplate') }})
    gcs_source: Optional[GoogleCloudDialogflowV2GcsSources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importGcsCustomMetadata') }})
    
