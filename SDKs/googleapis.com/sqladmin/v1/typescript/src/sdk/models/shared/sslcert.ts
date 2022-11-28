import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SslCert
/** 
 * SslCerts Resource
**/
export class SslCert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cert" })
  cert?: string;

  @SpeakeasyMetadata({ data: "json, name=certSerialNumber" })
  certSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
