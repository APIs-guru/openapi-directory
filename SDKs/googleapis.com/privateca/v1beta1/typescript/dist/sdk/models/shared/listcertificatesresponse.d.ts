import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Response message for CertificateAuthorityService.ListCertificates.
**/
export declare class ListCertificatesResponse extends SpeakeasyBase {
    certificates?: Certificate[];
    nextPageToken?: string;
    unreachable?: string[];
}
