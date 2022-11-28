import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateRevocationList } from "./certificaterevocationlist";



// ListCertificateRevocationListsResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
**/
export class ListCertificateRevocationListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateRevocationLists", elemType: CertificateRevocationList })
  certificateRevocationLists?: CertificateRevocationList[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
