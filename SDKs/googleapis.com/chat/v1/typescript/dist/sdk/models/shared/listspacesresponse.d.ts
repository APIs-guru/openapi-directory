import { SpeakeasyBase } from "../../../internal/utils";
import { Space } from "./space";
/**
 * The response corresponding to ListSpacesRequest.
**/
export declare class ListSpacesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    spaces?: Space[];
}
