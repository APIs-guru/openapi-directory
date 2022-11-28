import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListConstraint } from "./listconstraint";


export enum ConstraintConstraintDefaultEnum {
    ConstraintDefaultUnspecified = "CONSTRAINT_DEFAULT_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}


// Constraint
/** 
 * A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question.
**/
export class Constraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanConstraint" })
  booleanConstraint?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=constraintDefault" })
  constraintDefault?: ConstraintConstraintDefaultEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=listConstraint" })
  listConstraint?: ListConstraint;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
