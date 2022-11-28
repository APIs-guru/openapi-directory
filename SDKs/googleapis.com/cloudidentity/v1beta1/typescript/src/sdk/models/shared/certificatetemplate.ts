import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateTemplate
/** 
 * CertificateTemplate (v3 Extension in X.509).
**/
export class CertificateTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion?: number;
}
