import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";



// GoogleChromePolicyVersionsV1DefineCertificateResponse
/** 
 * Response object for creating a certificate.
**/
export class GoogleChromePolicyVersionsV1DefineCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
