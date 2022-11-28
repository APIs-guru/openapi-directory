from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ImportTaxonomiesRequest:
    r"""GoogleCloudDatacatalogV1ImportTaxonomiesRequest
    Request message for ImportTaxonomies.
    """
    
    cross_regional_source: Optional[GoogleCloudDatacatalogV1CrossRegionalSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossRegionalSource') }})
    inline_source: Optional[GoogleCloudDatacatalogV1InlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
