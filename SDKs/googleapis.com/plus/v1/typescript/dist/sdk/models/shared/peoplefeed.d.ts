import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
export declare class PeopleFeed extends SpeakeasyBase {
    etag?: string;
    items?: Person[];
    kind?: string;
    nextPageToken?: string;
    selfLink?: string;
    title?: string;
    totalItems?: number;
}
