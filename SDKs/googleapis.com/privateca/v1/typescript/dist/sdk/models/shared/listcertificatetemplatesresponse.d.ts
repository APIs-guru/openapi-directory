import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";
/**
 * Response message for CertificateAuthorityService.ListCertificateTemplates.
**/
export declare class ListCertificateTemplatesResponse extends SpeakeasyBase {
    certificateTemplates?: CertificateTemplate[];
    nextPageToken?: string;
    unreachable?: string[];
}
