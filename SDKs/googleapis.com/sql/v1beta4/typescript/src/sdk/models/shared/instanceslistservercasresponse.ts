import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";



// InstancesListServerCasResponse
/** 
 * Instances ListServerCas response.
**/
export class InstancesListServerCasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeVersion" })
  activeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=certs", elemType: SslCert })
  certs?: SslCert[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
