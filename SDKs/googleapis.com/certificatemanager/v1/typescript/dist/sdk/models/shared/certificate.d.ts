import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedCertificate } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";
export declare enum CertificateScopeEnum {
    Default = "DEFAULT",
    EdgeCache = "EDGE_CACHE"
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
