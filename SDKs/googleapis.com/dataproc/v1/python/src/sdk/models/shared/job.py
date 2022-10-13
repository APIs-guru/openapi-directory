from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hadoopjob
from . import hivejob
from . import pigjob
from . import jobplacement
from . import prestojob
from . import pysparkjob
from . import jobreference
from . import jobscheduling
from . import sparkjob
from . import sparkrjob
from . import sparksqljob
from . import jobstatus
from . import jobstatus
from . import trinojob
from . import yarnapplication


@dataclass_json
@dataclass
class Job:
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    driver_control_files_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverControlFilesUri' }})
    driver_output_resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverOutputResourceUri' }})
    hadoop_job: Optional[hadoopjob.HadoopJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hadoopJob' }})
    hive_job: Optional[hivejob.HiveJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiveJob' }})
    job_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobUuid' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    pig_job: Optional[pigjob.PigJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pigJob' }})
    placement: Optional[jobplacement.JobPlacement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement' }})
    presto_job: Optional[prestojob.PrestoJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prestoJob' }})
    pyspark_job: Optional[pysparkjob.PySparkJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pysparkJob' }})
    reference: Optional[jobreference.JobReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    scheduling: Optional[jobscheduling.JobScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduling' }})
    spark_job: Optional[sparkjob.SparkJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkJob' }})
    spark_r_job: Optional[sparkrjob.SparkRJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkRJob' }})
    spark_sql_job: Optional[sparksqljob.SparkSQLJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSqlJob' }})
    status: Optional[jobstatus.JobStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_history: Optional[List[jobstatus.JobStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusHistory' }})
    trino_job: Optional[trinojob.TrinoJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trinoJob' }})
    yarn_applications: Optional[List[yarnapplication.YarnApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yarnApplications' }})
    
