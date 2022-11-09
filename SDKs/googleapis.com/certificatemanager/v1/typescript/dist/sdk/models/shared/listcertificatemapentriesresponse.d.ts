import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateMapEntry } from "./certificatemapentry";
/**
 * Response for the `ListCertificateMapEntries` method.
**/
export declare class ListCertificateMapEntriesResponse extends SpeakeasyBase {
    certificateMapEntries?: CertificateMapEntry[];
    nextPageToken?: string;
    unreachable?: string[];
}
