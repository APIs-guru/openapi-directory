from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaProductInputConfigInput:
    r"""GoogleCloudRetailV2betaProductInputConfigInput
    The input config source for products.
    """
    
    big_query_source: Optional[GoogleCloudRetailV2betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    gcs_source: Optional[GoogleCloudRetailV2betaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    product_inline_source: Optional[GoogleCloudRetailV2betaProductInlineSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productInlineSource') }})
    
