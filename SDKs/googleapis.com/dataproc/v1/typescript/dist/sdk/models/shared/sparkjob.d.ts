import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
/**
 * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
**/
export declare class SparkJob extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    jarFileUris?: string[];
    loggingConfig?: LoggingConfig;
    mainClass?: string;
    mainJarFileUri?: string;
    properties?: Map<string, string>;
}
