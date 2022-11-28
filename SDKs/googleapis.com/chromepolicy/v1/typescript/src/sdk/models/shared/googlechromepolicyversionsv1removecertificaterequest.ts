import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1RemoveCertificateRequest
/** 
 * Request object for removing a certificate.
**/
export class GoogleChromePolicyVersionsV1RemoveCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
