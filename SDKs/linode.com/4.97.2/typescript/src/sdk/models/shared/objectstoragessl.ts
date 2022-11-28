import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectStorageSsl
/** 
 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
 * 
**/
export class ObjectStorageSsl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey: string;
}
