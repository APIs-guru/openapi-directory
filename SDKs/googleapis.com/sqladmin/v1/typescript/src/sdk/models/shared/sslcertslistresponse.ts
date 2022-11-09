import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SslCert } from "./sslcert";


// SslCertsListResponse
/** 
 * SslCerts list response.
**/
export class SslCertsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SslCert })
  items?: SslCert[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
