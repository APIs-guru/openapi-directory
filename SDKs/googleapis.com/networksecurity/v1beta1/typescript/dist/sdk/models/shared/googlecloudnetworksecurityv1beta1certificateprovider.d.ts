import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1beta1GrpcEndpoint } from "./googlecloudnetworksecurityv1beta1grpcendpoint";
/**
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
**/
export declare class GoogleCloudNetworksecurityV1beta1CertificateProvider extends SpeakeasyBase {
    certificateProviderInstance?: CertificateProviderInstance;
    grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
}
