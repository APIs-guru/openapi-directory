import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConditionIamEnum {
    NoAttr = "NO_ATTR",
    Authority = "AUTHORITY",
    Attribution = "ATTRIBUTION",
    SecurityRealm = "SECURITY_REALM",
    Approver = "APPROVER",
    JustificationType = "JUSTIFICATION_TYPE",
    CredentialsType = "CREDENTIALS_TYPE",
    CredsAssertion = "CREDS_ASSERTION"
}
export declare enum ConditionOpEnum {
    NoOp = "NO_OP",
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    In = "IN",
    NotIn = "NOT_IN",
    Discharged = "DISCHARGED"
}
export declare enum ConditionSysEnum {
    NoAttr = "NO_ATTR",
    Region = "REGION",
    Service = "SERVICE",
    Name = "NAME",
    Ip = "IP"
}
/**
 * A condition to be met.
**/
export declare class Condition extends SpeakeasyBase {
    iam?: ConditionIamEnum;
    op?: ConditionOpEnum;
    svc?: string;
    sys?: ConditionSysEnum;
    values?: string[];
}
