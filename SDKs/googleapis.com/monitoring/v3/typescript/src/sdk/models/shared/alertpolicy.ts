import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertStrategy } from "./alertstrategy";
import { Condition } from "./condition";
import { MutationRecord } from "./mutationrecord";
import { Documentation } from "./documentation";
import { MutationRecord } from "./mutationrecord";
import { Status } from "./status";

export enum AlertPolicyCombinerEnum {
    CombineUnspecified = "COMBINE_UNSPECIFIED"
,    And = "AND"
,    Or = "OR"
,    AndWithMatchingResource = "AND_WITH_MATCHING_RESOURCE"
}


// AlertPolicy
/** 
 * A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
**/
export class AlertPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertStrategy" })
  alertStrategy?: AlertStrategy;

  @Metadata({ data: "json, name=combiner" })
  combiner?: AlertPolicyCombinerEnum;

  @Metadata({ data: "json, name=conditions", elemType: shared.Condition })
  conditions?: Condition[];

  @Metadata({ data: "json, name=creationRecord" })
  creationRecord?: MutationRecord;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=mutationRecord" })
  mutationRecord?: MutationRecord;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationChannels" })
  notificationChannels?: string[];

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @Metadata({ data: "json, name=validity" })
  validity?: Status;
}
