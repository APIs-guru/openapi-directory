import { SpeakeasyBase } from "../../../internal/utils";
import { AlertStrategy } from "./alertstrategy";
import { Condition } from "./condition";
import { MutationRecord } from "./mutationrecord";
import { Documentation } from "./documentation";
import { Status } from "./status";
export declare enum AlertPolicyCombinerEnum {
    CombineUnspecified = "COMBINE_UNSPECIFIED",
    And = "AND",
    Or = "OR",
    AndWithMatchingResource = "AND_WITH_MATCHING_RESOURCE"
}
/**
 * A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
**/
export declare class AlertPolicy extends SpeakeasyBase {
    alertStrategy?: AlertStrategy;
    combiner?: AlertPolicyCombinerEnum;
    conditions?: Condition[];
    creationRecord?: MutationRecord;
    displayName?: string;
    documentation?: Documentation;
    enabled?: boolean;
    mutationRecord?: MutationRecord;
    name?: string;
    notificationChannels?: string[];
    userLabels?: Map<string, string>;
    validity?: Status;
}
