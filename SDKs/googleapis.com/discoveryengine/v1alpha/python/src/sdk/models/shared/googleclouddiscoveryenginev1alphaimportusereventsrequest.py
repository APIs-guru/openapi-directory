from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest:
    r"""GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest
    Request message for the ImportUserEvents request.
    """
    
    bigquery_source: Optional[GoogleCloudDiscoveryengineV1alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    error_config: Optional[GoogleCloudDiscoveryengineV1alphaImportErrorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorConfig') }})
    gcs_source: Optional[GoogleCloudDiscoveryengineV1alphaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    inline_source: Optional[GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
