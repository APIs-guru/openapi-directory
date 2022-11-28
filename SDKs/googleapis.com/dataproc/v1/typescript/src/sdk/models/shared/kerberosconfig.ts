import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KerberosConfig
/** 
 * Specifies Kerberos related configuration.
**/
export class KerberosConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crossRealmTrustAdminServer" })
  crossRealmTrustAdminServer?: string;

  @SpeakeasyMetadata({ data: "json, name=crossRealmTrustKdc" })
  crossRealmTrustKdc?: string;

  @SpeakeasyMetadata({ data: "json, name=crossRealmTrustRealm" })
  crossRealmTrustRealm?: string;

  @SpeakeasyMetadata({ data: "json, name=crossRealmTrustSharedPasswordUri" })
  crossRealmTrustSharedPasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=enableKerberos" })
  enableKerberos?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kdcDbKeyUri" })
  kdcDbKeyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPasswordUri" })
  keyPasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=keystorePasswordUri" })
  keystorePasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=keystoreUri" })
  keystoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyUri" })
  kmsKeyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=realm" })
  realm?: string;

  @SpeakeasyMetadata({ data: "json, name=rootPrincipalPasswordUri" })
  rootPrincipalPasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tgtLifetimeHours" })
  tgtLifetimeHours?: number;

  @SpeakeasyMetadata({ data: "json, name=truststorePasswordUri" })
  truststorePasswordUri?: string;

  @SpeakeasyMetadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;
}
