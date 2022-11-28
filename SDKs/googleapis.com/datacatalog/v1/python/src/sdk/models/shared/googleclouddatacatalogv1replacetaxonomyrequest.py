from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ReplaceTaxonomyRequest:
    r"""GoogleCloudDatacatalogV1ReplaceTaxonomyRequest
    Request message for ReplaceTaxonomy.
    """
    
    serialized_taxonomy: Optional[GoogleCloudDatacatalogV1SerializedTaxonomy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serializedTaxonomy') }})
    
