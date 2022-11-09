import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateAuthorityConfig } from "./certificateauthorityconfig";

export enum CertificateIssuanceConfigKeyAlgorithmEnum {
    KeyAlgorithmUnspecified = "KEY_ALGORITHM_UNSPECIFIED"
,    Rsa2048 = "RSA_2048"
,    EcdsaP256 = "ECDSA_P256"
}


// CertificateIssuanceConfig
/** 
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
export class CertificateIssuanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorityConfig" })
  certificateAuthorityConfig?: CertificateAuthorityConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rotationWindowPercentage" })
  rotationWindowPercentage?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
