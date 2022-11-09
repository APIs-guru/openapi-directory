import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1beta1GrpcEndpoint } from "./googlecloudnetworksecurityv1beta1grpcendpoint";


// ValidationCa
/** 
 * Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
**/
export class ValidationCa extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateProviderInstance" })
  certificateProviderInstance?: CertificateProviderInstance;

  @Metadata({ data: "json, name=grpcEndpoint" })
  grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
}
