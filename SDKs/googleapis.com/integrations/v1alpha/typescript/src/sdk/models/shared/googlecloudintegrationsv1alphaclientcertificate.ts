import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaClientCertificate
/** 
 * Contains client certificate information
**/
export class GoogleCloudIntegrationsV1alphaClientCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedPrivateKey" })
  encryptedPrivateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase?: string;

  @SpeakeasyMetadata({ data: "json, name=sslCertificate" })
  sslCertificate?: string;
}
