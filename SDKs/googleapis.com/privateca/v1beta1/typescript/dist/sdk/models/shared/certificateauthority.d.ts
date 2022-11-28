import { SpeakeasyBase } from "../../../internal/utils";
import { AccessUrls } from "./accessurls";
import { CertificateDescription } from "./certificatedescription";
import { CertificateAuthorityPolicy } from "./certificateauthoritypolicy";
import { CertificateConfig } from "./certificateconfig";
import { IssuingOptions } from "./issuingoptions";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";
export declare enum CertificateAuthorityStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    PendingActivation = "PENDING_ACTIVATION",
    PendingDeletion = "PENDING_DELETION"
}
export declare enum CertificateAuthorityTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}
export declare enum CertificateAuthorityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    SelfSigned = "SELF_SIGNED",
    Subordinate = "SUBORDINATE"
}
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
export declare class CertificateAuthority extends SpeakeasyBase {
    accessUrls?: AccessUrls;
    caCertificateDescriptions?: CertificateDescription[];
    certificatePolicy?: CertificateAuthorityPolicy;
    config?: CertificateConfig;
    createTime?: string;
    deleteTime?: string;
    gcsBucket?: string;
    issuingOptions?: IssuingOptions;
    keySpec?: KeyVersionSpec;
    labels?: Map<string, string>;
    lifetime?: string;
    name?: string;
    pemCaCertificates?: string[];
    state?: CertificateAuthorityStateEnum;
    subordinateConfig?: SubordinateConfig;
    tier?: CertificateAuthorityTierEnum;
    type?: CertificateAuthorityTypeEnum;
    updateTime?: string;
}
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
export declare class CertificateAuthorityInput extends SpeakeasyBase {
    accessUrls?: AccessUrls;
    certificatePolicy?: CertificateAuthorityPolicy;
    config?: CertificateConfig;
    gcsBucket?: string;
    issuingOptions?: IssuingOptions;
    keySpec?: KeyVersionSpec;
    labels?: Map<string, string>;
    lifetime?: string;
    subordinateConfig?: SubordinateConfig;
    tier?: CertificateAuthorityTierEnum;
    type?: CertificateAuthorityTypeEnum;
}
