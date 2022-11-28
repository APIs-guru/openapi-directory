from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogInlineSource:
    r"""GoogleCloudRecommendationengineV1beta1CatalogInlineSource
    The inline source for the input config for ImportCatalogItems method.
    """
    
    catalog_items: Optional[List[GoogleCloudRecommendationengineV1beta1CatalogItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogItems') }})
    
