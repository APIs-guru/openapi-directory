from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metastoreconfig
from . import sparkhistoryserverconfig


@dataclass_json
@dataclass
class AuxiliaryServicesConfig:
    metastore_config: Optional[metastoreconfig.MetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastoreConfig' }})
    spark_history_server_config: Optional[sparkhistoryserverconfig.SparkHistoryServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkHistoryServerConfig' }})
    
