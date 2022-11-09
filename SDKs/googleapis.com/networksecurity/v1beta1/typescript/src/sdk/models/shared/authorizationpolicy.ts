import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";

export enum AuthorizationPolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED"
,    Allow = "ALLOW"
,    Deny = "DENY"
}


// AuthorizationPolicy
/** 
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
**/
export class AuthorizationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: AuthorizationPolicyActionEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules?: Rule[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
