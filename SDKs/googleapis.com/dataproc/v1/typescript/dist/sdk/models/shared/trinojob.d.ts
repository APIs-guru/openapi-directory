import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
**/
export declare class TrinoJob extends SpeakeasyBase {
    clientTags?: string[];
    continueOnFailure?: boolean;
    loggingConfig?: LoggingConfig;
    outputFormat?: string;
    properties?: Map<string, string>;
    queryFileUri?: string;
    queryList?: QueryList;
}
