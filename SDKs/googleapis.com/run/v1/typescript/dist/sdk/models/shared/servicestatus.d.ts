import { SpeakeasyBase } from "../../../internal/utils";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTargetInput } from "./traffictarget";
import { TrafficTarget } from "./traffictarget";
/**
 * The current state of the Service. Output only.
**/
export declare class ServiceStatusInput extends SpeakeasyBase {
    address?: Addressable;
    conditions?: GoogleCloudRunV1Condition[];
    latestCreatedRevisionName?: string;
    latestReadyRevisionName?: string;
    observedGeneration?: number;
    traffic?: TrafficTargetInput[];
    url?: string;
}
/**
 * The current state of the Service. Output only.
**/
export declare class ServiceStatus extends SpeakeasyBase {
    address?: Addressable;
    conditions?: GoogleCloudRunV1Condition[];
    latestCreatedRevisionName?: string;
    latestReadyRevisionName?: string;
    observedGeneration?: number;
    traffic?: TrafficTarget[];
    url?: string;
}
