from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuxiliaryServicesConfig:
    r"""AuxiliaryServicesConfig
    Auxiliary services configuration for a Cluster.
    """
    
    metastore_config: Optional[MetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreConfig') }})
    spark_history_server_config: Optional[SparkHistoryServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkHistoryServerConfig') }})
    
