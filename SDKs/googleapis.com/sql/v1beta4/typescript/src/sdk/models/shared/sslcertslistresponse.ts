import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";



// SslCertsListResponse
/** 
 * SslCerts list response.
**/
export class SslCertsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SslCert })
  items?: SslCert[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
