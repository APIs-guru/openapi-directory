import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TlsCertificate
/** 
 * TlsCertificate Resource
**/
export class TlsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert" })
  cert?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
