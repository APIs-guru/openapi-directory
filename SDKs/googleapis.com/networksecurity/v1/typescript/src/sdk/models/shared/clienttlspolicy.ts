import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudNetworksecurityV1CertificateProvider } from "./googlecloudnetworksecurityv1certificateprovider";
import { ValidationCa } from "./validationca";


// ClientTlsPolicy
/** 
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
export class ClientTlsPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientCertificate" })
  clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverValidationCa", elemType: shared.ValidationCa })
  serverValidationCa?: ValidationCa[];

  @Metadata({ data: "json, name=sni" })
  sni?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
