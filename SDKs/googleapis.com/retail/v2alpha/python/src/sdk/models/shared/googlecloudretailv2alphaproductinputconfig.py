from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphabigquerysource
from . import googlecloudretailv2alphagcssource
from . import googlecloudretailv2alphaproductinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaProductInputConfig:
    big_query_source: Optional[googlecloudretailv2alphabigquerysource.GoogleCloudRetailV2alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2alphagcssource.GoogleCloudRetailV2alphaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    product_inline_source: Optional[googlecloudretailv2alphaproductinlinesource.GoogleCloudRetailV2alphaProductInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productInlineSource' }})
    
