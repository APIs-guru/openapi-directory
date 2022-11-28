import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
export declare class DatafeedsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: Datafeed[];
}
