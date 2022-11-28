import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1DiskConfig } from "./googlecloudmlv1diskconfig";
/**
 * Represents the configuration for a replica in a cluster.
**/
export declare class GoogleCloudMlV1ReplicaConfig extends SpeakeasyBase {
    acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;
    containerArgs?: string[];
    containerCommand?: string[];
    diskConfig?: GoogleCloudMlV1DiskConfig;
    imageUri?: string;
    tpuTfVersion?: string;
}
