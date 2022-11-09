import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";
/**
 * Configuration information for a Kerberos principal.
**/
export declare class KerberosConfig extends SpeakeasyBase {
    keytab?: Secret;
    krb5ConfigGcsUri?: string;
    principal?: string;
}
