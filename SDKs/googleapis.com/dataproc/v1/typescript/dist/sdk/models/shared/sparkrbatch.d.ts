import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
**/
export declare class SparkRBatch extends SpeakeasyBase {
    archiveUris?: string[];
    args?: string[];
    fileUris?: string[];
    mainRFileUri?: string;
}
