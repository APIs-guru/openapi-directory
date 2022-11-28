import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1GrpcEndpoint } from "./googlecloudnetworksecurityv1grpcendpoint";
/**
 * Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
**/
export declare class ValidationCa extends SpeakeasyBase {
    certificateProviderInstance?: CertificateProviderInstance;
    grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
}
