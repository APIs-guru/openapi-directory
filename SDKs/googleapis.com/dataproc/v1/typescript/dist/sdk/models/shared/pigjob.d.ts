import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
**/
export declare class PigJob extends SpeakeasyBase {
    continueOnFailure?: boolean;
    jarFileUris?: string[];
    loggingConfig?: LoggingConfig;
    properties?: Map<string, string>;
    queryFileUri?: string;
    queryList?: QueryList;
    scriptVariables?: Map<string, string>;
}
