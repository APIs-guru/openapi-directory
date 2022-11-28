import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
**/
export declare class PySparkBatch extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    jarFileUris?: string[];
    mainPythonFileUri?: string;
    pythonFileUris?: string[];
}
