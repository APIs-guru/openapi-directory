import { SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";
export declare class ListStreamsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    streams?: Stream[];
    unreachable?: string[];
}
