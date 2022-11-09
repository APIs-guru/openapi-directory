import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1GrpcEndpoint } from "./googlecloudnetworksecurityv1grpcendpoint";
/**
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
**/
export declare class GoogleCloudNetworksecurityV1CertificateProvider extends SpeakeasyBase {
    certificateProviderInstance?: CertificateProviderInstance;
    grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
}
