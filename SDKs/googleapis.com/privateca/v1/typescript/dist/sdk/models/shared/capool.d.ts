import { SpeakeasyBase } from "../../../internal/utils";
import { IssuancePolicy } from "./issuancepolicy";
import { PublishingOptions } from "./publishingoptions";
export declare enum CaPoolTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
export declare class CaPoolInput extends SpeakeasyBase {
    issuancePolicy?: IssuancePolicy;
    labels?: Map<string, string>;
    publishingOptions?: PublishingOptions;
    tier?: CaPoolTierEnum;
}
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
export declare class CaPool extends SpeakeasyBase {
    issuancePolicy?: IssuancePolicy;
    labels?: Map<string, string>;
    name?: string;
    publishingOptions?: PublishingOptions;
    tier?: CaPoolTierEnum;
}
