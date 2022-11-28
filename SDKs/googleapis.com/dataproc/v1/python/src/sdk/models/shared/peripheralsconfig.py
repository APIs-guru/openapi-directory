from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PeripheralsConfig:
    r"""PeripheralsConfig
    Auxiliary services configuration for a workload.
    """
    
    metastore_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreService') }})
    spark_history_server_config: Optional[SparkHistoryServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkHistoryServerConfig') }})
    
