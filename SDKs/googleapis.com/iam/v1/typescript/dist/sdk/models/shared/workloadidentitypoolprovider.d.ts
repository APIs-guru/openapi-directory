import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Aws } from "./aws";
import { Oidc } from "./oidc";
import { Saml } from "./saml";
export declare enum WorkloadIdentityPoolProviderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * A configuration for an external identity provider.
**/
export declare class WorkloadIdentityPoolProvider extends SpeakeasyBase {
    attributeCondition?: string;
    attributeMapping?: Map<string, string>;
    aws?: Aws;
    description?: string;
    disabled?: boolean;
    displayName?: string;
    name?: string;
    oidc?: Oidc;
    saml?: Saml;
    state?: WorkloadIdentityPoolProviderStateEnum;
}
