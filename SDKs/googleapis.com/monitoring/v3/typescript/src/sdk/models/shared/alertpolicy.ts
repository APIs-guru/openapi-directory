import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertStrategy } from "./alertstrategy";
import { Condition } from "./condition";
import { MutationRecord } from "./mutationrecord";
import { Documentation } from "./documentation";
import { Status } from "./status";


export enum AlertPolicyCombinerEnum {
    CombineUnspecified = "COMBINE_UNSPECIFIED",
    And = "AND",
    Or = "OR",
    AndWithMatchingResource = "AND_WITH_MATCHING_RESOURCE"
}


// AlertPolicy
/** 
 * A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
**/
export class AlertPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertStrategy" })
  alertStrategy?: AlertStrategy;

  @SpeakeasyMetadata({ data: "json, name=combiner" })
  combiner?: AlertPolicyCombinerEnum;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: Condition })
  conditions?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=creationRecord" })
  creationRecord?: MutationRecord;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mutationRecord" })
  mutationRecord?: MutationRecord;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationChannels" })
  notificationChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: Status;
}
