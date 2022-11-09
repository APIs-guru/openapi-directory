import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SslCert } from "./sslcert";


// InstancesListServerCasResponse
/** 
 * Instances ListServerCas response.
**/
export class InstancesListServerCasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeVersion" })
  activeVersion?: string;

  @Metadata({ data: "json, name=certs", elemType: shared.SslCert })
  certs?: SslCert[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
