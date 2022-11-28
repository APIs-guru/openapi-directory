import { SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";
/**
 * Response message for listing streams.
**/
export declare class ListStreamsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    streams?: Stream[];
    unreachable?: string[];
}
