import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRunV2TrafficTargetStatusTypeEnum {
    TrafficTargetAllocationTypeUnspecified = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED",
    TrafficTargetAllocationTypeLatest = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
    TrafficTargetAllocationTypeRevision = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"
}


// GoogleCloudRunV2TrafficTargetStatus
/** 
 * Represents the observed state of a single `TrafficTarget` entry.
**/
export class GoogleCloudRunV2TrafficTargetStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRunV2TrafficTargetStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
