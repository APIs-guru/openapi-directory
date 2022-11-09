import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectStorageSsl
/** 
 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
 * 
**/
export class ObjectStorageSsl extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: string;

  @Metadata({ data: "json, name=private_key" })
  privateKey: string;
}
