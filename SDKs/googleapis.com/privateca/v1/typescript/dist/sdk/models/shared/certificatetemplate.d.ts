import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
import { X509Parameters } from "./x509parameters";
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
export declare class CertificateTemplate extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    identityConstraints?: CertificateIdentityConstraints;
    labels?: Map<string, string>;
    name?: string;
    passthroughExtensions?: CertificateExtensionConstraints;
    predefinedValues?: X509Parameters;
    updateTime?: string;
}
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
export declare class CertificateTemplateInput extends SpeakeasyBase {
    description?: string;
    identityConstraints?: CertificateIdentityConstraints;
    labels?: Map<string, string>;
    passthroughExtensions?: CertificateExtensionConstraints;
    predefinedValues?: X509Parameters;
}
