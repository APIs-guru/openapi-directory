import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1GrpcEndpoint } from "./googlecloudnetworksecurityv1grpcendpoint";



// GoogleCloudNetworksecurityV1CertificateProvider
/** 
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
**/
export class GoogleCloudNetworksecurityV1CertificateProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateProviderInstance" })
  certificateProviderInstance?: CertificateProviderInstance;

  @SpeakeasyMetadata({ data: "json, name=grpcEndpoint" })
  grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
}
