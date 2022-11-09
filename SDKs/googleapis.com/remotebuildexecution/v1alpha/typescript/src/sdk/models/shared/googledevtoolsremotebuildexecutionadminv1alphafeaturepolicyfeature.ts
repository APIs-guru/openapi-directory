import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum {
    PolicyUnspecified = "POLICY_UNSPECIFIED"
,    Allowed = "ALLOWED"
,    Forbidden = "FORBIDDEN"
,    Restricted = "RESTRICTED"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
/** 
 * Defines whether a feature can be used or what values are accepted.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @Metadata({ data: "json, name=policy" })
  policy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
}
