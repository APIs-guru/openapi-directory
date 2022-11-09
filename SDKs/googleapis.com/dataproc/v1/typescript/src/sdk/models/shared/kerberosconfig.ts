import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KerberosConfig
/** 
 * Specifies Kerberos related configuration.
**/
export class KerberosConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=crossRealmTrustAdminServer" })
  crossRealmTrustAdminServer?: string;

  @Metadata({ data: "json, name=crossRealmTrustKdc" })
  crossRealmTrustKdc?: string;

  @Metadata({ data: "json, name=crossRealmTrustRealm" })
  crossRealmTrustRealm?: string;

  @Metadata({ data: "json, name=crossRealmTrustSharedPasswordUri" })
  crossRealmTrustSharedPasswordUri?: string;

  @Metadata({ data: "json, name=enableKerberos" })
  enableKerberos?: boolean;

  @Metadata({ data: "json, name=kdcDbKeyUri" })
  kdcDbKeyUri?: string;

  @Metadata({ data: "json, name=keyPasswordUri" })
  keyPasswordUri?: string;

  @Metadata({ data: "json, name=keystorePasswordUri" })
  keystorePasswordUri?: string;

  @Metadata({ data: "json, name=keystoreUri" })
  keystoreUri?: string;

  @Metadata({ data: "json, name=kmsKeyUri" })
  kmsKeyUri?: string;

  @Metadata({ data: "json, name=realm" })
  realm?: string;

  @Metadata({ data: "json, name=rootPrincipalPasswordUri" })
  rootPrincipalPasswordUri?: string;

  @Metadata({ data: "json, name=tgtLifetimeHours" })
  tgtLifetimeHours?: number;

  @Metadata({ data: "json, name=truststorePasswordUri" })
  truststorePasswordUri?: string;

  @Metadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;
}
