import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A Dataproc job resource.
**/
export declare class Job extends SpeakeasyBase {
    done?: boolean;
    driverControlFilesUri?: string;
    driverOutputResourceUri?: string;
    hadoopJob?: HadoopJob;
    hiveJob?: HiveJob;
    jobUuid?: string;
    labels?: Map<string, string>;
    pigJob?: PigJob;
    placement?: JobPlacement;
    prestoJob?: PrestoJob;
    pysparkJob?: PySparkJob;
    reference?: JobReference;
    scheduling?: JobScheduling;
    sparkJob?: SparkJob;
    sparkRJob?: SparkRJob;
    sparkSqlJob?: SparkSqlJob;
    status?: JobStatus;
    statusHistory?: JobStatus[];
    trinoJob?: TrinoJob;
    yarnApplications?: YarnApplication[];
}
/**
 * A Dataproc job resource.
**/
export declare class JobInput extends SpeakeasyBase {
    hadoopJob?: HadoopJob;
    hiveJob?: HiveJob;
    labels?: Map<string, string>;
    pigJob?: PigJob;
    placement?: JobPlacementInput;
    prestoJob?: PrestoJob;
    pysparkJob?: PySparkJob;
    reference?: JobReference;
    scheduling?: JobScheduling;
    sparkJob?: SparkJob;
    sparkRJob?: SparkRJob;
    sparkSqlJob?: SparkSqlJob;
    trinoJob?: TrinoJob;
}
