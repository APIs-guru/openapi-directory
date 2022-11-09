import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientCertificateConfig
/** 
 * Configuration for client certificates on the cluster.
**/
export class ClientCertificateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueClientCertificate" })
  issueClientCertificate?: boolean;
}
