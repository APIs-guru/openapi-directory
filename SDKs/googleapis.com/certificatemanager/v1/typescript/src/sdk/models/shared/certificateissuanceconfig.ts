import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfig } from "./certificateauthorityconfig";


export enum CertificateIssuanceConfigKeyAlgorithmEnum {
    KeyAlgorithmUnspecified = "KEY_ALGORITHM_UNSPECIFIED",
    Rsa2048 = "RSA_2048",
    EcdsaP256 = "ECDSA_P256"
}


// CertificateIssuanceConfigInput
/** 
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
export class CertificateIssuanceConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityConfig" })
  certificateAuthorityConfig?: CertificateAuthorityConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rotationWindowPercentage" })
  rotationWindowPercentage?: number;
}


// CertificateIssuanceConfig
/** 
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
export class CertificateIssuanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityConfig" })
  certificateAuthorityConfig?: CertificateAuthorityConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rotationWindowPercentage" })
  rotationWindowPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
