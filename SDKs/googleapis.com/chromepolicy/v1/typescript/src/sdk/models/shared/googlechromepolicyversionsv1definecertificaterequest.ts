import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";



// GoogleChromePolicyVersionsV1DefineCertificateRequest
/** 
 * Request object for creating a certificate.
**/
export class GoogleChromePolicyVersionsV1DefineCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ceritificateName" })
  ceritificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
