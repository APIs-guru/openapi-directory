from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Batch
    A representation of a batch workload in the service.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    environment_config: Optional[EnvironmentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    pyspark_batch: Optional[PySparkBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkBatch') }})
    runtime_config: Optional[RuntimeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfig') }})
    runtime_info: Optional[RuntimeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeInfo') }})
    spark_batch: Optional[SparkBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkBatch') }})
    spark_r_batch: Optional[SparkRBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRBatch') }})
    spark_sql_batch: Optional[SparkSQLBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlBatch') }})
    state: Optional[BatchStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_history: Optional[List[StateHistory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateHistory') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclass
class BatchInput:
    r"""BatchInput
    A representation of a batch workload in the service.
    """
    
    environment_config: Optional[EnvironmentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pyspark_batch: Optional[PySparkBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkBatch') }})
    runtime_config: Optional[RuntimeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeConfig') }})
    runtime_info: Optional[RuntimeInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeInfo') }})
    spark_batch: Optional[SparkBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkBatch') }})
    spark_r_batch: Optional[SparkRBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRBatch') }})
    spark_sql_batch: Optional[SparkSQLBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlBatch') }})
    
