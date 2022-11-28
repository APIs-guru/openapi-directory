from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataplexConfig:
    r"""DataplexConfig
    Specifies how metastore metadata should be integrated with the Dataplex service.
    """
    
    lake_resources: Optional[dict[str, Lake]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lakeResources') }})
    
