import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SchedulingNodeAffinityOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    In = "IN",
    NotIn = "NOT_IN"
}
/**
 * Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling
**/
export declare class SchedulingNodeAffinity extends SpeakeasyBase {
    key?: string;
    operator?: SchedulingNodeAffinityOperatorEnum;
    values?: string[];
}
