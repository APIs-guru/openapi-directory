from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy:
    r"""GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy
    Category represents catalog item category hierarchy.
    """
    
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
