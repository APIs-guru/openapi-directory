import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HadoopJob } from "./hadoopjob";
import { HiveJob } from "./hivejob";
import { PigJob } from "./pigjob";
import { JobPlacement } from "./jobplacement";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { JobReference } from "./jobreference";
import { JobScheduling } from "./jobscheduling";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { JobStatus } from "./jobstatus";
import { TrinoJob } from "./trinojob";
import { YarnApplication } from "./yarnapplication";
import { JobPlacementInput } from "./jobplacement";



// Job
/** 
 * A Dataproc job resource.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=driverControlFilesUri" })
  driverControlFilesUri?: string;

  @SpeakeasyMetadata({ data: "json, name=driverOutputResourceUri" })
  driverOutputResourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=hadoopJob" })
  hadoopJob?: HadoopJob;

  @SpeakeasyMetadata({ data: "json, name=hiveJob" })
  hiveJob?: HiveJob;

  @SpeakeasyMetadata({ data: "json, name=jobUuid" })
  jobUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pigJob" })
  pigJob?: PigJob;

  @SpeakeasyMetadata({ data: "json, name=placement" })
  placement?: JobPlacement;

  @SpeakeasyMetadata({ data: "json, name=prestoJob" })
  prestoJob?: PrestoJob;

  @SpeakeasyMetadata({ data: "json, name=pysparkJob" })
  pysparkJob?: PySparkJob;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: JobReference;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: JobScheduling;

  @SpeakeasyMetadata({ data: "json, name=sparkJob" })
  sparkJob?: SparkJob;

  @SpeakeasyMetadata({ data: "json, name=sparkRJob" })
  sparkRJob?: SparkRJob;

  @SpeakeasyMetadata({ data: "json, name=sparkSqlJob" })
  sparkSqlJob?: SparkSqlJob;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatus;

  @SpeakeasyMetadata({ data: "json, name=statusHistory", elemType: JobStatus })
  statusHistory?: JobStatus[];

  @SpeakeasyMetadata({ data: "json, name=trinoJob" })
  trinoJob?: TrinoJob;

  @SpeakeasyMetadata({ data: "json, name=yarnApplications", elemType: YarnApplication })
  yarnApplications?: YarnApplication[];
}


// JobInput
/** 
 * A Dataproc job resource.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hadoopJob" })
  hadoopJob?: HadoopJob;

  @SpeakeasyMetadata({ data: "json, name=hiveJob" })
  hiveJob?: HiveJob;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pigJob" })
  pigJob?: PigJob;

  @SpeakeasyMetadata({ data: "json, name=placement" })
  placement?: JobPlacementInput;

  @SpeakeasyMetadata({ data: "json, name=prestoJob" })
  prestoJob?: PrestoJob;

  @SpeakeasyMetadata({ data: "json, name=pysparkJob" })
  pysparkJob?: PySparkJob;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: JobReference;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: JobScheduling;

  @SpeakeasyMetadata({ data: "json, name=sparkJob" })
  sparkJob?: SparkJob;

  @SpeakeasyMetadata({ data: "json, name=sparkRJob" })
  sparkRJob?: SparkRJob;

  @SpeakeasyMetadata({ data: "json, name=sparkSqlJob" })
  sparkSqlJob?: SparkSqlJob;

  @SpeakeasyMetadata({ data: "json, name=trinoJob" })
  trinoJob?: TrinoJob;
}
