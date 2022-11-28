import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";
export declare class DatafeedstatusesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: DatafeedStatus[];
}
