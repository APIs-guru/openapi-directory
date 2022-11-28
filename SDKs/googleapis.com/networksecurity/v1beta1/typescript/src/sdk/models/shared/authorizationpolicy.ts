import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";


export enum AuthorizationPolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}


// AuthorizationPolicy
/** 
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
**/
export class AuthorizationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: AuthorizationPolicyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// AuthorizationPolicyInput
/** 
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
**/
export class AuthorizationPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: AuthorizationPolicyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];
}
