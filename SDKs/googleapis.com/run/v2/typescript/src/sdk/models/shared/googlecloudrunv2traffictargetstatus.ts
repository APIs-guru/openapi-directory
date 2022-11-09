import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRunV2TrafficTargetStatusTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
,    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
,    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}


// GoogleCloudRunV2TrafficTargetStatus
/** 
 * Represents the observed state of a single `TrafficTarget` entry.
**/
export class GoogleCloudRunV2TrafficTargetStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=percent" })
  percent?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudRunV2TrafficTargetStatusTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
