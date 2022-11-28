import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessUrls } from "./accessurls";
import { CertificateDescription } from "./certificatedescription";
import { CertificateAuthorityPolicy } from "./certificateauthoritypolicy";
import { CertificateConfig } from "./certificateconfig";
import { IssuingOptions } from "./issuingoptions";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";


export enum CertificateAuthorityStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    PendingActivation = "PENDING_ACTIVATION",
    PendingDeletion = "PENDING_DELETION"
}

export enum CertificateAuthorityTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}

export enum CertificateAuthorityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    SelfSigned = "SELF_SIGNED",
    Subordinate = "SUBORDINATE"
}


// CertificateAuthority
/** 
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
export class CertificateAuthority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessUrls" })
  accessUrls?: AccessUrls;

  @SpeakeasyMetadata({ data: "json, name=caCertificateDescriptions", elemType: CertificateDescription })
  caCertificateDescriptions?: CertificateDescription[];

  @SpeakeasyMetadata({ data: "json, name=certificatePolicy" })
  certificatePolicy?: CertificateAuthorityPolicy;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=issuingOptions" })
  issuingOptions?: IssuingOptions;

  @SpeakeasyMetadata({ data: "json, name=keySpec" })
  keySpec?: KeyVersionSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCaCertificates" })
  pemCaCertificates?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CertificateAuthorityStateEnum;

  @SpeakeasyMetadata({ data: "json, name=subordinateConfig" })
  subordinateConfig?: SubordinateConfig;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: CertificateAuthorityTierEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CertificateAuthorityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// CertificateAuthorityInput
/** 
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
export class CertificateAuthorityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessUrls" })
  accessUrls?: AccessUrls;

  @SpeakeasyMetadata({ data: "json, name=certificatePolicy" })
  certificatePolicy?: CertificateAuthorityPolicy;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=issuingOptions" })
  issuingOptions?: IssuingOptions;

  @SpeakeasyMetadata({ data: "json, name=keySpec" })
  keySpec?: KeyVersionSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=subordinateConfig" })
  subordinateConfig?: SubordinateConfig;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: CertificateAuthorityTierEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CertificateAuthorityTypeEnum;
}
