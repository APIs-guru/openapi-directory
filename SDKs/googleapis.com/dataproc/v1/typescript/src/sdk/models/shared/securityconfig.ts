import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityConfig } from "./identityconfig";
import { KerberosConfig } from "./kerberosconfig";


// SecurityConfig
/** 
 * Security related configuration, including encryption, Kerberos, etc.
**/
export class SecurityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityConfig" })
  identityConfig?: IdentityConfig;

  @Metadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;
}
