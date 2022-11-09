import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IssuancePolicy } from "./issuancepolicy";
import { PublishingOptions } from "./publishingoptions";

export enum CaPoolTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Enterprise = "ENTERPRISE"
,    Devops = "DEVOPS"
}


// CaPool
/** 
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
export class CaPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=issuancePolicy" })
  issuancePolicy?: IssuancePolicy;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publishingOptions" })
  publishingOptions?: PublishingOptions;

  @Metadata({ data: "json, name=tier" })
  tier?: CaPoolTierEnum;
}
