import { SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";
/**
 * Ad List Response
**/
export declare class AdsListResponse extends SpeakeasyBase {
    ads?: Ad[];
    kind?: string;
    nextPageToken?: string;
}
