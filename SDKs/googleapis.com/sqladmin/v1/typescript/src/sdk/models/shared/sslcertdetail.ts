import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";



// SslCertDetail
/** 
 * SslCertDetail.
**/
export class SslCertDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certInfo" })
  certInfo?: SslCert;

  @SpeakeasyMetadata({ data: "json, name=certPrivateKey" })
  certPrivateKey?: string;
}
