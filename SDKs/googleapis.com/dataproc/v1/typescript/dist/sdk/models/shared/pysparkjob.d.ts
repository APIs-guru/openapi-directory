import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
/**
 * A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
**/
export declare class PySparkJob extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    jarFileUris?: string[];
    loggingConfig?: LoggingConfig;
    mainPythonFileUri?: string;
    properties?: Map<string, string>;
    pythonFileUris?: string[];
}
