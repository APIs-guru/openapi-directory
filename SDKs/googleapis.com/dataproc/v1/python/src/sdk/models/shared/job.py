from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Job:
    r"""Job
    A Dataproc job resource.
    """
    
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    driver_control_files_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverControlFilesUri') }})
    driver_output_resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverOutputResourceUri') }})
    hadoop_job: Optional[HadoopJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[HiveJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    job_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobUuid') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[PigJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    placement: Optional[JobPlacement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    presto_job: Optional[PrestoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[PySparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    reference: Optional[JobReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduling: Optional[JobScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[SparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[SparkRJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[SparkSQLJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    status: Optional[JobStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_history: Optional[List[JobStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusHistory') }})
    trino_job: Optional[TrinoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    yarn_applications: Optional[List[YarnApplication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yarnApplications') }})
    

@dataclass_json
@dataclass
class JobInput:
    r"""JobInput
    A Dataproc job resource.
    """
    
    hadoop_job: Optional[HadoopJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[HiveJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[PigJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    placement: Optional[JobPlacementInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    presto_job: Optional[PrestoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[PySparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    reference: Optional[JobReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduling: Optional[JobScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[SparkJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[SparkRJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[SparkSQLJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    trino_job: Optional[TrinoJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    
