import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateConfig } from "./clientcertificateconfig";



// MasterAuth
/** 
 * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
**/
export class MasterAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=clientCertificateConfig" })
  clientCertificateConfig?: ClientCertificateConfig;

  @SpeakeasyMetadata({ data: "json, name=clientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterCaCertificate" })
  clusterCaCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
