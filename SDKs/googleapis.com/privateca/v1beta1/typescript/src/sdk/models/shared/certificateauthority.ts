import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessUrls } from "./accessurls";
import { CertificateDescription } from "./certificatedescription";
import { CertificateAuthorityPolicy } from "./certificateauthoritypolicy";
import { CertificateConfig } from "./certificateconfig";
import { IssuingOptions } from "./issuingoptions";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";

export enum CertificateAuthorityStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    PendingActivation = "PENDING_ACTIVATION"
,    PendingDeletion = "PENDING_DELETION"
}

export enum CertificateAuthorityTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Enterprise = "ENTERPRISE"
,    Devops = "DEVOPS"
}

export enum CertificateAuthorityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    SelfSigned = "SELF_SIGNED"
,    Subordinate = "SUBORDINATE"
}


// CertificateAuthority
/** 
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
export class CertificateAuthority extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessUrls" })
  accessUrls?: AccessUrls;

  @Metadata({ data: "json, name=caCertificateDescriptions", elemType: shared.CertificateDescription })
  caCertificateDescriptions?: CertificateDescription[];

  @Metadata({ data: "json, name=certificatePolicy" })
  certificatePolicy?: CertificateAuthorityPolicy;

  @Metadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @Metadata({ data: "json, name=issuingOptions" })
  issuingOptions?: IssuingOptions;

  @Metadata({ data: "json, name=keySpec" })
  keySpec?: KeyVersionSpec;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pemCaCertificates" })
  pemCaCertificates?: string[];

  @Metadata({ data: "json, name=state" })
  state?: CertificateAuthorityStateEnum;

  @Metadata({ data: "json, name=subordinateConfig" })
  subordinateConfig?: SubordinateConfig;

  @Metadata({ data: "json, name=tier" })
  tier?: CertificateAuthorityTierEnum;

  @Metadata({ data: "json, name=type" })
  type?: CertificateAuthorityTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
