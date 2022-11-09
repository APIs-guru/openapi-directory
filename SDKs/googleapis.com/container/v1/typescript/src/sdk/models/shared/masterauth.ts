import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientCertificateConfig } from "./clientcertificateconfig";


// MasterAuth
/** 
 * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
**/
export class MasterAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @Metadata({ data: "json, name=clientCertificateConfig" })
  clientCertificateConfig?: ClientCertificateConfig;

  @Metadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=clusterCaCertificate" })
  clusterCaCertificate?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
