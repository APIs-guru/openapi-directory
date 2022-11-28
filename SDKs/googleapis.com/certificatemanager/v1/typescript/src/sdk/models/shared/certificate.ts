import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedCertificateInput } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";
import { ManagedCertificate } from "./managedcertificate";


export enum CertificateScopeEnum {
    Default = "DEFAULT",
    EdgeCache = "EDGE_CACHE"
}


// CertificateInput
/** 
 * Defines TLS certificate.
**/
export class CertificateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=managed" })
  managed?: ManagedCertificateInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: CertificateScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=selfManaged" })
  selfManaged?: SelfManagedCertificate;
}


// Certificate
/** 
 * Defines TLS certificate.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=managed" })
  managed?: ManagedCertificate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=sanDnsnames" })
  sanDnsnames?: string[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: CertificateScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=selfManaged" })
  selfManaged?: SelfManagedCertificate;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
