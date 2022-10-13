from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sparkhistoryserverconfig


@dataclass_json
@dataclass
class PeripheralsConfig:
    metastore_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastoreService' }})
    spark_history_server_config: Optional[sparkhistoryserverconfig.SparkHistoryServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkHistoryServerConfig' }})
    
