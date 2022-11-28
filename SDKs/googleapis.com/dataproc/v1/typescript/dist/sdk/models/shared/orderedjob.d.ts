import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A job executed by the workflow.
**/
export declare class OrderedJob extends SpeakeasyBase {
    hadoopJob?: HadoopJob;
    hiveJob?: HiveJob;
    labels?: Map<string, string>;
    pigJob?: PigJob;
    prerequisiteStepIds?: string[];
    prestoJob?: PrestoJob;
    pysparkJob?: PySparkJob;
    scheduling?: JobScheduling;
    sparkJob?: SparkJob;
    sparkRJob?: SparkRJob;
    sparkSqlJob?: SparkSqlJob;
    stepId?: string;
    trinoJob?: TrinoJob;
}
