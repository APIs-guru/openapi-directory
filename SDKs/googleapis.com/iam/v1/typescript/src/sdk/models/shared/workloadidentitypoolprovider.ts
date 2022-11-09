import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Aws } from "./aws";
import { Oidc } from "./oidc";
import { Saml } from "./saml";

export enum WorkloadIdentityPoolProviderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// WorkloadIdentityPoolProvider
/** 
 * A configuration for an external identity provider.
**/
export class WorkloadIdentityPoolProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeCondition" })
  attributeCondition?: string;

  @Metadata({ data: "json, name=attributeMapping" })
  attributeMapping?: Map<string, string>;

  @Metadata({ data: "json, name=aws" })
  aws?: Aws;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oidc" })
  oidc?: Oidc;

  @Metadata({ data: "json, name=saml" })
  saml?: Saml;

  @Metadata({ data: "json, name=state" })
  state?: WorkloadIdentityPoolProviderStateEnum;
}
