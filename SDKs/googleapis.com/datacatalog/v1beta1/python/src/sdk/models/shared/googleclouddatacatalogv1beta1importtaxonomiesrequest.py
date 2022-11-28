from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest:
    r"""GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest
    Request message for ImportTaxonomies.
    """
    
    inline_source: Optional[GoogleCloudDatacatalogV1beta1InlineSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineSource') }})
    
