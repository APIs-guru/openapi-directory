import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfig } from "./certificateauthorityconfig";
export declare enum CertificateIssuanceConfigKeyAlgorithmEnum {
    KeyAlgorithmUnspecified = "KEY_ALGORITHM_UNSPECIFIED",
    Rsa2048 = "RSA_2048",
    EcdsaP256 = "ECDSA_P256"
}
/**
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
export declare class CertificateIssuanceConfigInput extends SpeakeasyBase {
    certificateAuthorityConfig?: CertificateAuthorityConfig;
    description?: string;
    keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;
    labels?: Map<string, string>;
    lifetime?: string;
    name?: string;
    rotationWindowPercentage?: number;
}
/**
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
export declare class CertificateIssuanceConfig extends SpeakeasyBase {
    certificateAuthorityConfig?: CertificateAuthorityConfig;
    createTime?: string;
    description?: string;
    keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;
    labels?: Map<string, string>;
    lifetime?: string;
    name?: string;
    rotationWindowPercentage?: number;
    updateTime?: string;
}
