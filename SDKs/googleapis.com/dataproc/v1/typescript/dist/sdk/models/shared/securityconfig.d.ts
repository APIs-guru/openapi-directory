import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityConfig } from "./identityconfig";
import { KerberosConfig } from "./kerberosconfig";
/**
 * Security related configuration, including encryption, Kerberos, etc.
**/
export declare class SecurityConfig extends SpeakeasyBase {
    identityConfig?: IdentityConfig;
    kerberosConfig?: KerberosConfig;
}
