import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TlsCertificate
/** 
 * TlsCertificate Resource
**/
export class TlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cert" })
  cert?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
