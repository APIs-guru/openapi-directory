import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum {
    AllValuesUnspecified = "ALL_VALUES_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}


// GoogleCloudOrgpolicyV1ListPolicy
/** 
 * Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
**/
export class GoogleCloudOrgpolicyV1ListPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allValues" })
  allValues?: GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=deniedValues" })
  deniedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=suggestedValue" })
  suggestedValue?: string;
}
