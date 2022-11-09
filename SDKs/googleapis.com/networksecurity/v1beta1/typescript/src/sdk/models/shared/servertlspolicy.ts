import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MtlsPolicy } from "./mtlspolicy";
import { GoogleCloudNetworksecurityV1beta1CertificateProvider } from "./googlecloudnetworksecurityv1beta1certificateprovider";


// ServerTlsPolicy
/** 
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
export class ServerTlsPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowOpen" })
  allowOpen?: boolean;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mtlsPolicy" })
  mtlsPolicy?: MtlsPolicy;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverCertificate" })
  serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
