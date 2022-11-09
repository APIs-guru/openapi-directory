import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";


// GoogleChromePolicyVersionsV1DefineCertificateRequest
/** 
 * Request object for creating a certificate.
**/
export class GoogleChromePolicyVersionsV1DefineCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ceritificateName" })
  ceritificateName?: string;

  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
