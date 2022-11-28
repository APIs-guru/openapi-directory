import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedCertificateInput } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";
import { ManagedCertificate } from "./managedcertificate";
export declare enum CertificateScopeEnum {
    Default = "DEFAULT",
    EdgeCache = "EDGE_CACHE"
}
/**
 * Defines TLS certificate.
**/
export declare class CertificateInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    managed?: ManagedCertificateInput;
    name?: string;
    scope?: CertificateScopeEnum;
    selfManaged?: SelfManagedCertificate;
}
/**
 * Defines TLS certificate.
**/
export declare class Certificate extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    expireTime?: string;
    labels?: Map<string, string>;
    managed?: ManagedCertificate;
    name?: string;
    pemCertificate?: string;
    sanDnsnames?: string[];
    scope?: CertificateScopeEnum;
    selfManaged?: SelfManagedCertificate;
    updateTime?: string;
}
