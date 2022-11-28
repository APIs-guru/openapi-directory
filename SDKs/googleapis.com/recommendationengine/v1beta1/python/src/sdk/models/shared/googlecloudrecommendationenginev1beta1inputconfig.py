from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1InputConfig:
    r"""GoogleCloudRecommendationengineV1beta1InputConfig
    The input config source.
    """
    
    big_query_source: Optional[GoogleCloudRecommendationengineV1beta1BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    catalog_inline_source: Optional[GoogleCloudRecommendationengineV1beta1CatalogInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogInlineSource') }})
    gcs_source: Optional[GoogleCloudRecommendationengineV1beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    user_event_inline_source: Optional[GoogleCloudRecommendationengineV1beta1UserEventInlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEventInlineSource') }})
    
