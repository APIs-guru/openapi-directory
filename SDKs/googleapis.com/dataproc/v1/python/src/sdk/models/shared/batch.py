from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import environmentconfig
from . import pysparkbatch
from . import runtimeconfig
from . import runtimeinfo
from . import sparkbatch
from . import sparkrbatch
from . import sparksqlbatch
from . import statehistory

class BatchStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class Batch:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    environment_config: Optional[environmentconfig.EnvironmentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    pyspark_batch: Optional[pysparkbatch.PySparkBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pysparkBatch' }})
    runtime_config: Optional[runtimeconfig.RuntimeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeConfig' }})
    runtime_info: Optional[runtimeinfo.RuntimeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeInfo' }})
    spark_batch: Optional[sparkbatch.SparkBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkBatch' }})
    spark_r_batch: Optional[sparkrbatch.SparkRBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkRBatch' }})
    spark_sql_batch: Optional[sparksqlbatch.SparkSQLBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSqlBatch' }})
    state: Optional[BatchStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_history: Optional[List[statehistory.StateHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateHistory' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
