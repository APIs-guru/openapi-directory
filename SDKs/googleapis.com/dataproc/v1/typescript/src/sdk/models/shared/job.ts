import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
import { JobStatus } from "./jobstatus";
import { TrinoJob } from "./trinojob";
import { YarnApplication } from "./yarnapplication";


// Job
/** 
 * A Dataproc job resource.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=driverControlFilesUri" })
  driverControlFilesUri?: string;

  @Metadata({ data: "json, name=driverOutputResourceUri" })
  driverOutputResourceUri?: string;

  @Metadata({ data: "json, name=hadoopJob" })
  hadoopJob?: HadoopJob;

  @Metadata({ data: "json, name=hiveJob" })
  hiveJob?: HiveJob;

  @Metadata({ data: "json, name=jobUuid" })
  jobUuid?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=pigJob" })
  pigJob?: PigJob;

  @Metadata({ data: "json, name=placement" })
  placement?: JobPlacement;

  @Metadata({ data: "json, name=prestoJob" })
  prestoJob?: PrestoJob;

  @Metadata({ data: "json, name=pysparkJob" })
  pysparkJob?: PySparkJob;

  @Metadata({ data: "json, name=reference" })
  reference?: JobReference;

  @Metadata({ data: "json, name=scheduling" })
  scheduling?: JobScheduling;

  @Metadata({ data: "json, name=sparkJob" })
  sparkJob?: SparkJob;

  @Metadata({ data: "json, name=sparkRJob" })
  sparkRJob?: SparkRJob;

  @Metadata({ data: "json, name=sparkSqlJob" })
  sparkSqlJob?: SparkSqlJob;

  @Metadata({ data: "json, name=status" })
  status?: JobStatus;

  @Metadata({ data: "json, name=statusHistory", elemType: shared.JobStatus })
  statusHistory?: JobStatus[];

  @Metadata({ data: "json, name=trinoJob" })
  trinoJob?: TrinoJob;

  @Metadata({ data: "json, name=yarnApplications", elemType: shared.YarnApplication })
  yarnApplications?: YarnApplication[];
}
