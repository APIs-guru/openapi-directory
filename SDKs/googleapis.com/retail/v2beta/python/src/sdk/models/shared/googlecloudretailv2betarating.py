from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRating:
    r"""GoogleCloudRetailV2betaRating
    The rating of a Product.
    """
    
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageRating') }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    rating_histogram: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingHistogram') }})
    
