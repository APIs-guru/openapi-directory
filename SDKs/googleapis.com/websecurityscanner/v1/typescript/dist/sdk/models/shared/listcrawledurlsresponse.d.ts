import { SpeakeasyBase } from "../../../internal/utils";
import { CrawledUrl } from "./crawledurl";
/**
 * Response for the `ListCrawledUrls` method.
**/
export declare class ListCrawledUrlsResponse extends SpeakeasyBase {
    crawledUrls?: CrawledUrl[];
    nextPageToken?: string;
}
