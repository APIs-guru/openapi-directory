import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * Response message for the `ListRegions` method.
**/
export declare class ListRegionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    regions?: Region[];
}
