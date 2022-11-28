import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
/**
 * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
**/
export declare class SparkRJob extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    loggingConfig?: LoggingConfig;
    mainRFileUri?: string;
    properties?: Map<string, string>;
}
