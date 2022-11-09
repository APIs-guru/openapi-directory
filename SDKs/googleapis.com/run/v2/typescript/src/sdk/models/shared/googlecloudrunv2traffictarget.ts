import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRunV2TrafficTargetTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
,    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
,    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}


// GoogleCloudRunV2TrafficTarget
/** 
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
**/
export class GoogleCloudRunV2TrafficTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=percent" })
  percent?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudRunV2TrafficTargetTypeEnum;
}
