import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRunV2TrafficTargetTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}


// GoogleCloudRunV2TrafficTarget
/** 
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
**/
export class GoogleCloudRunV2TrafficTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRunV2TrafficTargetTypeEnum;
}
