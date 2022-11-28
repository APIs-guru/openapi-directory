import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
**/
export declare class ConfigurationStatus extends SpeakeasyBase {
    conditions?: GoogleCloudRunV1Condition[];
    latestCreatedRevisionName?: string;
    latestReadyRevisionName?: string;
    observedGeneration?: number;
}
