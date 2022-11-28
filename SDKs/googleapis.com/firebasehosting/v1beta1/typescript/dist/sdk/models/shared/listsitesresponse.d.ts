import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
export declare class ListSitesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sites?: Site[];
}
