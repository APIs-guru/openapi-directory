import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedCertificate } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";

export enum CertificateScopeEnum {
    Default = "DEFAULT"
,    EdgeCache = "EDGE_CACHE"
}


// Certificate
/** 
 * Defines TLS certificate.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=managed" })
  managed?: ManagedCertificate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @Metadata({ data: "json, name=sanDnsnames" })
  sanDnsnames?: string[];

  @Metadata({ data: "json, name=scope" })
  scope?: CertificateScopeEnum;

  @Metadata({ data: "json, name=selfManaged" })
  selfManaged?: SelfManagedCertificate;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
