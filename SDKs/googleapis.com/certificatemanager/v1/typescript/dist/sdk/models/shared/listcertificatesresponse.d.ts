import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Certificate } from "./certificate";
/**
 * Response for the `ListCertificates` method.
**/
export declare class ListCertificatesResponse extends SpeakeasyBase {
    certificates?: Certificate[];
    nextPageToken?: string;
    unreachable?: string[];
}
