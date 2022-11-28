from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest:
    r"""GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
    Request message for Import methods.
    """
    
    bigquery_source: Optional[GoogleCloudDiscoveryengineV1alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[GoogleCloudDiscoveryengineV1alphaImportErrorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[GoogleCloudDiscoveryengineV1alphaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    reconciliation_mode: Optional[GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciliationMode') }})
    
