import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
/**
 * Response message for Verifications.ListVerifications.
**/
export declare class ListVerificationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    verifications?: Verification[];
}
