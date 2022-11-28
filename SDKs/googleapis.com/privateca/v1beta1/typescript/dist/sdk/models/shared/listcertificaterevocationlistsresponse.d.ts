import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateRevocationList } from "./certificaterevocationlist";
/**
 * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
**/
export declare class ListCertificateRevocationListsResponse extends SpeakeasyBase {
    certificateRevocationLists?: CertificateRevocationList[];
    nextPageToken?: string;
    unreachable?: string[];
}
