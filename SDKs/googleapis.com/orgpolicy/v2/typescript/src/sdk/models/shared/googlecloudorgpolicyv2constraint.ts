import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2ConstraintListConstraint } from "./googlecloudorgpolicyv2constraintlistconstraint";

export enum GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED"
,    Allow = "ALLOW"
,    Deny = "DENY"
}


// GoogleCloudOrgpolicyV2Constraint
/** 
 * A `constraint` describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organization by setting a `policy` that includes `constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `policy` being defined or inherited for the resource in question.
**/
export class GoogleCloudOrgpolicyV2Constraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanConstraint" })
  booleanConstraint?: Map<string, any>;

  @Metadata({ data: "json, name=constraintDefault" })
  constraintDefault?: GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=listConstraint" })
  listConstraint?: GoogleCloudOrgpolicyV2ConstraintListConstraint;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
