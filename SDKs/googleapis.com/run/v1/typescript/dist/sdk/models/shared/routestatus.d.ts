import { SpeakeasyBase } from "../../../internal/utils";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTarget } from "./traffictarget";
/**
 * RouteStatus communicates the observed state of the Route (from the controller).
**/
export declare class RouteStatus extends SpeakeasyBase {
    address?: Addressable;
    conditions?: GoogleCloudRunV1Condition[];
    observedGeneration?: number;
    traffic?: TrafficTarget[];
    url?: string;
}
