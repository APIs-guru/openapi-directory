import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaClientCertificate
/** 
 * Contains client certificate information
**/
export class GoogleCloudIntegrationsV1alphaClientCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptedPrivateKey" })
  encryptedPrivateKey?: string;

  @Metadata({ data: "json, name=passphrase" })
  passphrase?: string;

  @Metadata({ data: "json, name=sslCertificate" })
  sslCertificate?: string;
}
