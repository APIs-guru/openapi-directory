import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Activity } from "./activity";
export declare class ActivityFeed extends SpeakeasyBase {
    etag?: string;
    id?: string;
    items?: Activity[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
    title?: string;
    updated?: Date;
}
