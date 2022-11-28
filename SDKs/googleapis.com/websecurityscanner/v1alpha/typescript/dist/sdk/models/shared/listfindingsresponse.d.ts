import { SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
/**
 * Response for the `ListFindings` method.
**/
export declare class ListFindingsResponse extends SpeakeasyBase {
    findings?: Finding[];
    nextPageToken?: string;
}
