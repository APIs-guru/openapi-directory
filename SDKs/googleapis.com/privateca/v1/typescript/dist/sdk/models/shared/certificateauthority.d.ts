import { SpeakeasyBase } from "../../../internal/utils";
import { AccessUrls } from "./accessurls";
import { CertificateDescription } from "./certificatedescription";
import { CertificateConfig } from "./certificateconfig";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";
export declare enum CertificateAuthorityStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Staged = "STAGED",
    AwaitingUserActivation = "AWAITING_USER_ACTIVATION",
    Deleted = "DELETED"
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
    config?: CertificateConfig;
    createTime?: string;
    deleteTime?: string;
    expireTime?: string;
    gcsBucket?: string;
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
    config?: CertificateConfig;
    gcsBucket?: string;
    keySpec?: KeyVersionSpec;
    labels?: Map<string, string>;
    lifetime?: string;
    subordinateConfig?: SubordinateConfig;
    type?: CertificateAuthorityTypeEnum;
}
