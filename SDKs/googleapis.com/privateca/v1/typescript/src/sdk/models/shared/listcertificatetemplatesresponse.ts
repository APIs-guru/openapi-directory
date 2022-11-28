import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";



// ListCertificateTemplatesResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateTemplates.
**/
export class ListCertificateTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateTemplates", elemType: CertificateTemplate })
  certificateTemplates?: CertificateTemplate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
