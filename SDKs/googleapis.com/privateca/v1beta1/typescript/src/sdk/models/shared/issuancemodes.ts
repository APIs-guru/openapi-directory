import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssuanceModes
/** 
 * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.
**/
export class IssuanceModes extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowConfigBasedIssuance" })
  allowConfigBasedIssuance?: boolean;

  @Metadata({ data: "json, name=allowCsrBasedIssuance" })
  allowCsrBasedIssuance?: boolean;
}
