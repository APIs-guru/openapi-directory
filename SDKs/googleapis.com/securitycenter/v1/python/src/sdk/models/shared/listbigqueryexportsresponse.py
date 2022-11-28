from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBigQueryExportsResponse:
    r"""ListBigQueryExportsResponse
    Response message for listing BigQuery exports.
    """
    
    big_query_exports: Optional[List[GoogleCloudSecuritycenterV1BigQueryExport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryExports') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
