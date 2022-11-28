import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
**/
export declare class PrestoJob extends SpeakeasyBase {
    clientTags?: string[];
    continueOnFailure?: boolean;
    loggingConfig?: LoggingConfig;
    outputFormat?: string;
    properties?: Map<string, string>;
    queryFileUri?: string;
    queryList?: QueryList;
}
