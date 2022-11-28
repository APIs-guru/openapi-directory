import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Image Runtime Configuration used with Batch execution.
**/
export declare class GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime extends SpeakeasyBase {
    image?: string;
    javaJars?: string[];
    properties?: Map<string, string>;
    pythonPackages?: string[];
}
