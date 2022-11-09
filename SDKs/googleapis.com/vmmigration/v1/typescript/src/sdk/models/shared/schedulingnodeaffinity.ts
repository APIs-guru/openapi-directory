import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchedulingNodeAffinityOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    In = "IN"
,    NotIn = "NOT_IN"
}


// SchedulingNodeAffinity
/** 
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
**/
export class SchedulingNodeAffinity extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: SchedulingNodeAffinityOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
