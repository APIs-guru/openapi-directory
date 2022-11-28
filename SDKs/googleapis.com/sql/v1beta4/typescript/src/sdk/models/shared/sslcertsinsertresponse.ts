import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCertDetail } from "./sslcertdetail";
import { Operation } from "./operation";
import { SslCert } from "./sslcert";



// SslCertsInsertResponse
/** 
 * SslCert insert response.
**/
export class SslCertsInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCert" })
  clientCert?: SslCertDetail;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=serverCaCert" })
  serverCaCert?: SslCert;
}
