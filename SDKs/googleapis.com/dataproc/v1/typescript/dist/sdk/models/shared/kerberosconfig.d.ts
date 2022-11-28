import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies Kerberos related configuration.
**/
export declare class KerberosConfig extends SpeakeasyBase {
    crossRealmTrustAdminServer?: string;
    crossRealmTrustKdc?: string;
    crossRealmTrustRealm?: string;
    crossRealmTrustSharedPasswordUri?: string;
    enableKerberos?: boolean;
    kdcDbKeyUri?: string;
    keyPasswordUri?: string;
    keystorePasswordUri?: string;
    keystoreUri?: string;
    kmsKeyUri?: string;
    realm?: string;
    rootPrincipalPasswordUri?: string;
    tgtLifetimeHours?: number;
    truststorePasswordUri?: string;
    truststoreUri?: string;
}
