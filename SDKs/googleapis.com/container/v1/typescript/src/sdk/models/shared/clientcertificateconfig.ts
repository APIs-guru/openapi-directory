import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientCertificateConfig
/** 
 * Configuration for client certificates on the cluster.
**/
export class ClientCertificateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueClientCertificate" })
  issueClientCertificate?: boolean;
}
