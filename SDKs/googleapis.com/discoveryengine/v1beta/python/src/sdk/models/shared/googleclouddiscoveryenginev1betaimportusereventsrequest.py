from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest:
    r"""GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
    Request message for the ImportUserEvents request.
    """
    
    bigquery_source: Optional[GoogleCloudDiscoveryengineV1betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[GoogleCloudDiscoveryengineV1betaImportErrorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[GoogleCloudDiscoveryengineV1betaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
