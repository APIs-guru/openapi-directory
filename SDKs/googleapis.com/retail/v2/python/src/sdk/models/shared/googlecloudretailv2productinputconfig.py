from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2bigquerysource
from . import googlecloudretailv2gcssource
from . import googlecloudretailv2productinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2ProductInputConfig:
    big_query_source: Optional[googlecloudretailv2bigquerysource.GoogleCloudRetailV2BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2gcssource.GoogleCloudRetailV2GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    product_inline_source: Optional[googlecloudretailv2productinlinesource.GoogleCloudRetailV2ProductInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productInlineSource' }})
    
