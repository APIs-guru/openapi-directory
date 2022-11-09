import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConditionIamEnum {
    NoAttr = "NO_ATTR"
,    Authority = "AUTHORITY"
,    Attribution = "ATTRIBUTION"
,    SecurityRealm = "SECURITY_REALM"
,    Approver = "APPROVER"
,    JustificationType = "JUSTIFICATION_TYPE"
,    CredentialsType = "CREDENTIALS_TYPE"
,    CredsAssertion = "CREDS_ASSERTION"
}

export enum ConditionOpEnum {
    NoOp = "NO_OP"
,    Equals = "EQUALS"
,    NotEquals = "NOT_EQUALS"
,    In = "IN"
,    NotIn = "NOT_IN"
,    Discharged = "DISCHARGED"
}

export enum ConditionSysEnum {
    NoAttr = "NO_ATTR"
,    Region = "REGION"
,    Service = "SERVICE"
,    Name = "NAME"
,    Ip = "IP"
}


// Condition
/** 
 * A condition to be met.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=iam" })
  iam?: ConditionIamEnum;

  @Metadata({ data: "json, name=op" })
  op?: ConditionOpEnum;

  @Metadata({ data: "json, name=svc" })
  svc?: string;

  @Metadata({ data: "json, name=sys" })
  sys?: ConditionSysEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
