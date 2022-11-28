from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataIntegration:
    r"""MetadataIntegration
    Specifies how metastore metadata should be integrated with external services.
    """
    
    data_catalog_config: Optional[DataCatalogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCatalogConfig') }})
    dataplex_config: Optional[DataplexConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataplexConfig') }})
    
