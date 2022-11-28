import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CrawledUrl
/** 
 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
**/
export class CrawledUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
