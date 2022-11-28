import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRunV2TrafficTargetTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}
/**
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
**/
export declare class GoogleCloudRunV2TrafficTarget extends SpeakeasyBase {
    percent?: number;
    revision?: string;
    tag?: string;
    type?: GoogleCloudRunV2TrafficTargetTypeEnum;
}
