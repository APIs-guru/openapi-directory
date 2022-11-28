import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
**/
export declare class SparkBatch extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    jarFileUris?: string[];
    mainClass?: string;
    mainJarFileUri?: string;
}
