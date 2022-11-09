import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessUrls
/** 
 * URLs where a CertificateAuthority will publish content.
**/
export class AccessUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificateAccessUrl" })
  caCertificateAccessUrl?: string;

  @Metadata({ data: "json, name=crlAccessUrls" })
  crlAccessUrls?: string[];
}
