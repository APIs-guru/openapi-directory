import { SpeakeasyBase } from "../../../internal/utils";
import { MtlsPolicy } from "./mtlspolicy";
import { GoogleCloudNetworksecurityV1beta1CertificateProvider } from "./googlecloudnetworksecurityv1beta1certificateprovider";
/**
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
export declare class ServerTlsPolicy extends SpeakeasyBase {
    allowOpen?: boolean;
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    mtlsPolicy?: MtlsPolicy;
    name?: string;
    serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;
    updateTime?: string;
}
/**
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
export declare class ServerTlsPolicyInput extends SpeakeasyBase {
    allowOpen?: boolean;
    description?: string;
    labels?: Map<string, string>;
    mtlsPolicy?: MtlsPolicy;
    name?: string;
    serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;
}
