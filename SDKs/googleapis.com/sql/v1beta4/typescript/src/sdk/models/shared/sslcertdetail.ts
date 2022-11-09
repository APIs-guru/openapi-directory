import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCert } from "./sslcert";


// SslCertDetail
/** 
 * SslCertDetail.
**/
export class SslCertDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=certInfo" })
  certInfo?: SslCert;

  @Metadata({ data: "json, name=certPrivateKey" })
  certPrivateKey?: string;
}
