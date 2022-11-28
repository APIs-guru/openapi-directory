import { SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";
/**
 * Response containing the objects for a stream.
**/
export declare class ListStreamObjectsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    streamObjects?: StreamObject[];
}
