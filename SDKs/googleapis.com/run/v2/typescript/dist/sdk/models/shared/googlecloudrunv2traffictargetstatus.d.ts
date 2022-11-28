import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRunV2TrafficTargetStatusTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}
/**
 * Represents the observed state of a single `TrafficTarget` entry.
**/
export declare class GoogleCloudRunV2TrafficTargetStatus extends SpeakeasyBase {
    percent?: number;
    revision?: string;
    tag?: string;
    type?: GoogleCloudRunV2TrafficTargetStatusTypeEnum;
    uri?: string;
}
