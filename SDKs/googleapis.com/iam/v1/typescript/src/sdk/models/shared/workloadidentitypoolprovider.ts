import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aws } from "./aws";
import { Oidc } from "./oidc";
import { Saml } from "./saml";


export enum WorkloadIdentityPoolProviderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// WorkloadIdentityPoolProviderInput
/** 
 * A configuration for an external identity provider.
**/
export class WorkloadIdentityPoolProviderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeCondition" })
  attributeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeMapping" })
  attributeMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=aws" })
  aws?: Aws;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=oidc" })
  oidc?: Oidc;

  @SpeakeasyMetadata({ data: "json, name=saml" })
  saml?: Saml;
}


// WorkloadIdentityPoolProvider
/** 
 * A configuration for an external identity provider.
**/
export class WorkloadIdentityPoolProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeCondition" })
  attributeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeMapping" })
  attributeMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=aws" })
  aws?: Aws;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oidc" })
  oidc?: Oidc;

  @SpeakeasyMetadata({ data: "json, name=saml" })
  saml?: Saml;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WorkloadIdentityPoolProviderStateEnum;
}
