import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessUrls
/** 
 * URLs where a CertificateAuthority will publish content.
**/
export class AccessUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificateAccessUrl" })
  caCertificateAccessUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=crlAccessUrls" })
  crlAccessUrls?: string[];
}
