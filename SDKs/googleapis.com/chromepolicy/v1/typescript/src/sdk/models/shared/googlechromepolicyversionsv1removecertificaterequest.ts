import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1RemoveCertificateRequest
/** 
 * Request object for removing a certificate.
**/
export class GoogleChromePolicyVersionsV1RemoveCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkId" })
  networkId?: string;

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
