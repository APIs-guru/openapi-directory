import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=hadoopJob" })
  hadoopJob?: HadoopJob;

  @SpeakeasyMetadata({ data: "json, name=hiveJob" })
  hiveJob?: HiveJob;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pigJob" })
  pigJob?: PigJob;

  @SpeakeasyMetadata({ data: "json, name=prerequisiteStepIds" })
  prerequisiteStepIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=prestoJob" })
  prestoJob?: PrestoJob;

  @SpeakeasyMetadata({ data: "json, name=pysparkJob" })
  pysparkJob?: PySparkJob;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: JobScheduling;

  @SpeakeasyMetadata({ data: "json, name=sparkJob" })
  sparkJob?: SparkJob;

  @SpeakeasyMetadata({ data: "json, name=sparkRJob" })
  sparkRJob?: SparkRJob;

  @SpeakeasyMetadata({ data: "json, name=sparkSqlJob" })
  sparkSqlJob?: SparkSqlJob;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;

  @SpeakeasyMetadata({ data: "json, name=trinoJob" })
  trinoJob?: TrinoJob;
}
