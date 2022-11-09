import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";


// KerberosConfig
/** 
 * Configuration information for a Kerberos principal.
**/
export class KerberosConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=keytab" })
  keytab?: Secret;

  @Metadata({ data: "json, name=krb5ConfigGcsUri" })
  krb5ConfigGcsUri?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}
