import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HadoopJob } from "./hadoopjob";
import { HiveJob } from "./hivejob";
import { PigJob } from "./pigjob";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { JobScheduling } from "./jobscheduling";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { TrinoJob } from "./trinojob";


// OrderedJob
/** 
 * A job executed by the workflow.
**/
export class OrderedJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=hadoopJob" })
  hadoopJob?: HadoopJob;

  @Metadata({ data: "json, name=hiveJob" })
  hiveJob?: HiveJob;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=pigJob" })
  pigJob?: PigJob;

  @Metadata({ data: "json, name=prerequisiteStepIds" })
  prerequisiteStepIds?: string[];

  @Metadata({ data: "json, name=prestoJob" })
  prestoJob?: PrestoJob;

  @Metadata({ data: "json, name=pysparkJob" })
  pysparkJob?: PySparkJob;

  @Metadata({ data: "json, name=scheduling" })
  scheduling?: JobScheduling;

  @Metadata({ data: "json, name=sparkJob" })
  sparkJob?: SparkJob;

  @Metadata({ data: "json, name=sparkRJob" })
  sparkRJob?: SparkRJob;

  @Metadata({ data: "json, name=sparkSqlJob" })
  sparkSqlJob?: SparkSqlJob;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;

  @Metadata({ data: "json, name=trinoJob" })
  trinoJob?: TrinoJob;
}
