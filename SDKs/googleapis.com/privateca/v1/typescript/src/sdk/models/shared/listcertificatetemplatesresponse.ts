import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateTemplate } from "./certificatetemplate";


// ListCertificateTemplatesResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateTemplates.
**/
export class ListCertificateTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateTemplates", elemType: shared.CertificateTemplate })
  certificateTemplates?: CertificateTemplate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
