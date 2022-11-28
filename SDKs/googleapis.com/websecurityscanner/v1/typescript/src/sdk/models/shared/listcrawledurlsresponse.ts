import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawledUrl } from "./crawledurl";



// ListCrawledUrlsResponse
/** 
 * Response for the `ListCrawledUrls` method.
**/
export class ListCrawledUrlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crawledUrls", elemType: CrawledUrl })
  crawledUrls?: CrawledUrl[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
