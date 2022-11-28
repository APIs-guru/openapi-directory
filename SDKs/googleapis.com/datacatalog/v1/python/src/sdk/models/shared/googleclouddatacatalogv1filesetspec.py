from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1FilesetSpec:
    r"""GoogleCloudDatacatalogV1FilesetSpec
    Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.
    """
    
    dataplex_fileset: Optional[GoogleCloudDatacatalogV1DataplexFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataplexFileset') }})
    
