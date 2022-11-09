import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrawledUrl } from "./crawledurl";


// ListCrawledUrlsResponse
/** 
 * Response for the `ListCrawledUrls` method.
**/
export class ListCrawledUrlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=crawledUrls", elemType: shared.CrawledUrl })
  crawledUrls?: CrawledUrl[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
