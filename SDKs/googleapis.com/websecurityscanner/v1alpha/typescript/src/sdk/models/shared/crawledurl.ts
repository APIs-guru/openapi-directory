import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CrawledUrl
/** 
 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
**/
export class CrawledUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
