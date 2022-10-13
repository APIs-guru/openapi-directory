from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hadoopjob
from . import hivejob
from . import pigjob
from . import prestojob
from . import pysparkjob
from . import jobscheduling
from . import sparkjob
from . import sparkrjob
from . import sparksqljob
from . import trinojob


@dataclass_json
@dataclass
class OrderedJob:
    hadoop_job: Optional[hadoopjob.HadoopJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hadoopJob' }})
    hive_job: Optional[hivejob.HiveJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiveJob' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    pig_job: Optional[pigjob.PigJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pigJob' }})
    prerequisite_step_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerequisiteStepIds' }})
    presto_job: Optional[prestojob.PrestoJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prestoJob' }})
    pyspark_job: Optional[pysparkjob.PySparkJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pysparkJob' }})
    scheduling: Optional[jobscheduling.JobScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduling' }})
    spark_job: Optional[sparkjob.SparkJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkJob' }})
    spark_r_job: Optional[sparkrjob.SparkRJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkRJob' }})
    spark_sql_job: Optional[sparksqljob.SparkSQLJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSqlJob' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    trino_job: Optional[trinojob.TrinoJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trinoJob' }})
    
