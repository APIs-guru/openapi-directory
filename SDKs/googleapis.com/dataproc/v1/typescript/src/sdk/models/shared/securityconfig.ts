import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityConfig } from "./identityconfig";
import { KerberosConfig } from "./kerberosconfig";



// SecurityConfig
/** 
 * Security related configuration, including encryption, Kerberos, etc.
**/
export class SecurityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityConfig" })
  identityConfig?: IdentityConfig;

  @SpeakeasyMetadata({ data: "json, name=kerberosConfig" })
  kerberosConfig?: KerberosConfig;
}
