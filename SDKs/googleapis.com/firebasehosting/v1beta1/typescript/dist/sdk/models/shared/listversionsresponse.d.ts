import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
export declare class ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: Version[];
}
