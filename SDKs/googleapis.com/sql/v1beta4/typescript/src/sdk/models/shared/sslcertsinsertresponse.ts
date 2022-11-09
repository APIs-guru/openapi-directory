import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCertDetail } from "./sslcertdetail";
import { Operation } from "./operation";
import { SslCert } from "./sslcert";


// SslCertsInsertResponse
/** 
 * SslCert insert response.
**/
export class SslCertsInsertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientCert" })
  clientCert?: SslCertDetail;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=serverCaCert" })
  serverCaCert?: SslCert;
}
