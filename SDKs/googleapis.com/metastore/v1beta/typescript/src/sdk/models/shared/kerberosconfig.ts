import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";



// KerberosConfig
/** 
 * Configuration information for a Kerberos principal.
**/
export class KerberosConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keytab" })
  keytab?: Secret;

  @SpeakeasyMetadata({ data: "json, name=krb5ConfigGcsUri" })
  krb5ConfigGcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
