from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betabigquerysource
from . import googlecloudretailv2betagcssource
from . import googlecloudretailv2betaproductinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductInputConfig:
    big_query_source: Optional[googlecloudretailv2betabigquerysource.GoogleCloudRetailV2betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2betagcssource.GoogleCloudRetailV2betaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    product_inline_source: Optional[googlecloudretailv2betaproductinlinesource.GoogleCloudRetailV2betaProductInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productInlineSource' }})
    
