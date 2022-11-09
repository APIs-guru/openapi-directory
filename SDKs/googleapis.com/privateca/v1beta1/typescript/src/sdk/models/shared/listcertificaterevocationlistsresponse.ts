import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateRevocationList } from "./certificaterevocationlist";


// ListCertificateRevocationListsResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
**/
export class ListCertificateRevocationListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateRevocationLists", elemType: shared.CertificateRevocationList })
  certificateRevocationLists?: CertificateRevocationList[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
