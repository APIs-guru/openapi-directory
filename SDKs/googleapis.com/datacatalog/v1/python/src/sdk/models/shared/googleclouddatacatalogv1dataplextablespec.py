from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexTableSpec:
    r"""GoogleCloudDatacatalogV1DataplexTableSpec
    Entry specification for a Dataplex table.
    """
    
    dataplex_spec: Optional[GoogleCloudDatacatalogV1DataplexSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataplexSpec') }})
    external_tables: Optional[List[GoogleCloudDatacatalogV1DataplexExternalTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalTables') }})
    user_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
