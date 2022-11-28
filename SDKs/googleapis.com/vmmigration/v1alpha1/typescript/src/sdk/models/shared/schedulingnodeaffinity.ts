import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SchedulingNodeAffinityOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    In = "IN",
    NotIn = "NOT_IN"
}


// SchedulingNodeAffinity
/** 
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
**/
export class SchedulingNodeAffinity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: SchedulingNodeAffinityOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
