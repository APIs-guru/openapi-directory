import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1beta1GrpcEndpoint } from "./googlecloudnetworksecurityv1beta1grpcendpoint";


// GoogleCloudNetworksecurityV1beta1CertificateProvider
/** 
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
**/
export class GoogleCloudNetworksecurityV1beta1CertificateProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateProviderInstance" })
  certificateProviderInstance?: CertificateProviderInstance;

  @Metadata({ data: "json, name=grpcEndpoint" })
  grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
}
