import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MtlsPolicy } from "./mtlspolicy";
import { GoogleCloudNetworksecurityV1beta1CertificateProvider } from "./googlecloudnetworksecurityv1beta1certificateprovider";



// ServerTlsPolicy
/** 
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
export class ServerTlsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOpen" })
  allowOpen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mtlsPolicy" })
  mtlsPolicy?: MtlsPolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificate" })
  serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ServerTlsPolicyInput
/** 
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
export class ServerTlsPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOpen" })
  allowOpen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mtlsPolicy" })
  mtlsPolicy?: MtlsPolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCertificate" })
  serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;
}
