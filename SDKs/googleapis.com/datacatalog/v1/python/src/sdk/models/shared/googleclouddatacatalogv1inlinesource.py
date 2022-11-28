from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1InlineSource:
    r"""GoogleCloudDatacatalogV1InlineSource
    Inline source containing taxonomies to import.
    """
    
    taxonomies: Optional[List[GoogleCloudDatacatalogV1SerializedTaxonomy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomies') }})
    
