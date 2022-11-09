import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
import { X509Parameters } from "./x509parameters";


// CertificateTemplate
/** 
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
export class CertificateTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=identityConstraints" })
  identityConstraints?: CertificateIdentityConstraints;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=passthroughExtensions" })
  passthroughExtensions?: CertificateExtensionConstraints;

  @Metadata({ data: "json, name=predefinedValues" })
  predefinedValues?: X509Parameters;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
