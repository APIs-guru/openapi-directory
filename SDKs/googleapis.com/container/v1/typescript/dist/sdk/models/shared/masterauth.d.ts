import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateConfig } from "./clientcertificateconfig";
/**
 * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
**/
export declare class MasterAuth extends SpeakeasyBase {
    clientCertificate?: string;
    clientCertificateConfig?: ClientCertificateConfig;
    clientKey?: string;
    clusterCaCertificate?: string;
    password?: string;
    username?: string;
}
