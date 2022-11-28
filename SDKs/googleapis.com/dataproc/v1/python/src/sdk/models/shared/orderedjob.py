from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderedJob:
    r"""OrderedJob
    A job executed by the workflow.
    """
    
    hadoop_job: Optional[HadoopJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[HiveJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[PigJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    prerequisite_step_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerequisiteStepIds') }})
    presto_job: Optional[PrestoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[PySparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    scheduling: Optional[JobScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[SparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[SparkRJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[SparkSQLJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    trino_job: Optional[TrinoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    
