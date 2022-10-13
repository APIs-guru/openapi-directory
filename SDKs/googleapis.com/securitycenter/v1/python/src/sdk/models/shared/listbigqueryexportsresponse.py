from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudsecuritycenterv1bigqueryexport


@dataclass_json
@dataclass
class ListBigQueryExportsResponse:
    big_query_exports: Optional[List[googlecloudsecuritycenterv1bigqueryexport.GoogleCloudSecuritycenterV1BigQueryExport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQueryExports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
