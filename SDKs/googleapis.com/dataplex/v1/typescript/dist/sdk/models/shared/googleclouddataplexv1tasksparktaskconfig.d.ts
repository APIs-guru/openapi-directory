import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";
/**
 * User-specified config for running a Spark task.
**/
export declare class GoogleCloudDataplexV1TaskSparkTaskConfig extends SpeakeasyBase {
    archiveUris?: string[];
    fileUris?: string[];
    infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;
    mainClass?: string;
    mainJarFileUri?: string;
    pythonScriptFile?: string;
    sqlScript?: string;
    sqlScriptFile?: string;
}
