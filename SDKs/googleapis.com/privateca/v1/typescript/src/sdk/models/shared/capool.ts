import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IssuancePolicy } from "./issuancepolicy";
import { PublishingOptions } from "./publishingoptions";


export enum CaPoolTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}


// CaPoolInput
/** 
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
export class CaPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuancePolicy" })
  issuancePolicy?: IssuancePolicy;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=publishingOptions" })
  publishingOptions?: PublishingOptions;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: CaPoolTierEnum;
}


// CaPool
/** 
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
export class CaPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuancePolicy" })
  issuancePolicy?: IssuancePolicy;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publishingOptions" })
  publishingOptions?: PublishingOptions;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: CaPoolTierEnum;
}
