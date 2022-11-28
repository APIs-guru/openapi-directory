import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";
import { X509Parameters } from "./x509parameters";



// CertificateTemplate
/** 
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
export class CertificateTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=identityConstraints" })
  identityConstraints?: CertificateIdentityConstraints;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=passthroughExtensions" })
  passthroughExtensions?: CertificateExtensionConstraints;

  @SpeakeasyMetadata({ data: "json, name=predefinedValues" })
  predefinedValues?: X509Parameters;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// CertificateTemplateInput
/** 
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
export class CertificateTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=identityConstraints" })
  identityConstraints?: CertificateIdentityConstraints;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=passthroughExtensions" })
  passthroughExtensions?: CertificateExtensionConstraints;

  @SpeakeasyMetadata({ data: "json, name=predefinedValues" })
  predefinedValues?: X509Parameters;
}
