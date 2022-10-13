from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datacatalogconfig
from . import dataplexconfig


@dataclass_json
@dataclass
class MetadataIntegration:
    data_catalog_config: Optional[datacatalogconfig.DataCatalogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCatalogConfig' }})
    dataplex_config: Optional[dataplexconfig.DataplexConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataplexConfig' }})
    
