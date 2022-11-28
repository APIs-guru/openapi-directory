import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaseClassification } from "./caseclassification";
import { Actor } from "./actor";
import { ActorInput } from "./actor";


export enum CasePriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P0 = "P0",
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4"
}

export enum CaseSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    S0 = "S0",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3",
    S4 = "S4"
}

export enum CaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    InProgressGoogleSupport = "IN_PROGRESS_GOOGLE_SUPPORT",
    ActionRequired = "ACTION_REQUIRED",
    SolutionProvided = "SOLUTION_PROVIDED",
    Closed = "CLOSED"
}


// Case
/** 
 * A support case.
**/
export class Case extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: CaseClassification;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: Actor;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=escalated" })
  escalated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: CasePriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: CaseSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CaseStateEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriberEmailAddresses" })
  subscriberEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCase" })
  testCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// CaseInput
/** 
 * A support case.
**/
export class CaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: CaseClassification;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: ActorInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=escalated" })
  escalated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: CasePriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: CaseSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriberEmailAddresses" })
  subscriberEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCase" })
  testCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
