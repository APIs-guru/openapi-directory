import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudNetworksecurityV1CertificateProvider } from "./googlecloudnetworksecurityv1certificateprovider";
import { ValidationCa } from "./validationca";
/**
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
export declare class ClientTlsPolicy extends SpeakeasyBase {
    clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    serverValidationCa?: ValidationCa[];
    sni?: string;
    updateTime?: string;
}
/**
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
export declare class ClientTlsPolicyInput extends SpeakeasyBase {
    clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    serverValidationCa?: ValidationCa[];
    sni?: string;
}
