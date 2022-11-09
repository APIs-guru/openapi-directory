import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateTemplate
/** 
 * CertificateTemplate (v3 Extension in X.509).
**/
export class CertificateTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion?: number;
}
