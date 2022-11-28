import { SpeakeasyBase } from "../../../internal/utils";
import { CaseClassification } from "./caseclassification";
import { Actor } from "./actor";
import { ActorInput } from "./actor";
export declare enum CasePriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P0 = "P0",
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4"
}
export declare enum CaseSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    S0 = "S0",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3",
    S4 = "S4"
}
export declare enum CaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    InProgressGoogleSupport = "IN_PROGRESS_GOOGLE_SUPPORT",
    ActionRequired = "ACTION_REQUIRED",
    SolutionProvided = "SOLUTION_PROVIDED",
    Closed = "CLOSED"
}
/**
 * A support case.
**/
export declare class Case extends SpeakeasyBase {
    classification?: CaseClassification;
    createTime?: string;
    creator?: Actor;
    description?: string;
    displayName?: string;
    escalated?: boolean;
    name?: string;
    priority?: CasePriorityEnum;
    severity?: CaseSeverityEnum;
    state?: CaseStateEnum;
    subscriberEmailAddresses?: string[];
    testCase?: boolean;
    timeZone?: string;
    updateTime?: string;
}
/**
 * A support case.
**/
export declare class CaseInput extends SpeakeasyBase {
    classification?: CaseClassification;
    creator?: ActorInput;
    description?: string;
    displayName?: string;
    escalated?: boolean;
    name?: string;
    priority?: CasePriorityEnum;
    severity?: CaseSeverityEnum;
    subscriberEmailAddresses?: string[];
    testCase?: boolean;
    timeZone?: string;
}
