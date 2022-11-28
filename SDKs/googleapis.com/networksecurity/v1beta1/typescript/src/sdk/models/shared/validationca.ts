import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1beta1GrpcEndpoint } from "./googlecloudnetworksecurityv1beta1grpcendpoint";



// ValidationCa
/** 
 * Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
**/
export class ValidationCa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateProviderInstance" })
  certificateProviderInstance?: CertificateProviderInstance;

  @SpeakeasyMetadata({ data: "json, name=grpcEndpoint" })
  grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
}
