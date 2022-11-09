import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SslCert
/** 
 * SslCerts Resource
**/
export class SslCert extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert" })
  cert?: string;

  @Metadata({ data: "json, name=certSerialNumber" })
  certSerialNumber?: string;

  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
