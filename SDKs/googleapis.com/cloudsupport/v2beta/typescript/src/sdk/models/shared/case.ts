import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaseClassification } from "./caseclassification";
import { Actor } from "./actor";

export enum CasePriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED"
,    P0 = "P0"
,    P1 = "P1"
,    P2 = "P2"
,    P3 = "P3"
,    P4 = "P4"
}

export enum CaseSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    S0 = "S0"
,    S1 = "S1"
,    S2 = "S2"
,    S3 = "S3"
,    S4 = "S4"
}

export enum CaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    New = "NEW"
,    InProgressGoogleSupport = "IN_PROGRESS_GOOGLE_SUPPORT"
,    ActionRequired = "ACTION_REQUIRED"
,    SolutionProvided = "SOLUTION_PROVIDED"
,    Closed = "CLOSED"
}


// Case
/** 
 * A support case.
**/
export class Case extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification?: CaseClassification;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: Actor;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=escalated" })
  escalated?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: CasePriorityEnum;

  @Metadata({ data: "json, name=severity" })
  severity?: CaseSeverityEnum;

  @Metadata({ data: "json, name=state" })
  state?: CaseStateEnum;

  @Metadata({ data: "json, name=subscriberEmailAddresses" })
  subscriberEmailAddresses?: string[];

  @Metadata({ data: "json, name=testCase" })
  testCase?: boolean;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
