import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudNetworksecurityV1beta1CertificateProvider } from "./googlecloudnetworksecurityv1beta1certificateprovider";
import { ValidationCa } from "./validationca";



// ClientTlsPolicy
/** 
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
export class ClientTlsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverValidationCa", elemType: ValidationCa })
  serverValidationCa?: ValidationCa[];

  @SpeakeasyMetadata({ data: "json, name=sni" })
  sni?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ClientTlsPolicyInput
/** 
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
export class ClientTlsPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientCertificate" })
  clientCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverValidationCa", elemType: ValidationCa })
  serverValidationCa?: ValidationCa[];

  @SpeakeasyMetadata({ data: "json, name=sni" })
  sni?: string;
}
