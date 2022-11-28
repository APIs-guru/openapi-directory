from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFhirStoresResponse:
    r"""ListFhirStoresResponse
    Lists the FHIR stores in the given dataset.
    """
    
    fhir_stores: Optional[List[FhirStore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fhirStores') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
