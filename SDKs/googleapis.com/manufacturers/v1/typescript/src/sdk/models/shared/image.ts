import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImageStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    PendingProcessing = "PENDING_PROCESSING"
,    PendingCrawl = "PENDING_CRAWL"
,    Ok = "OK"
,    Roboted = "ROBOTED"
,    Xroboted = "XROBOTED"
,    CrawlError = "CRAWL_ERROR"
,    ProcessingError = "PROCESSING_ERROR"
,    DecodingError = "DECODING_ERROR"
,    TooBig = "TOO_BIG"
,    CrawlSkipped = "CRAWL_SKIPPED"
,    Hostloaded = "HOSTLOADED"
,    Http404 = "HTTP_404"
}

export enum ImageTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Crawled = "CRAWLED"
,    Uploaded = "UPLOADED"
}


// Image
/** 
 * An image.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: ImageStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: ImageTypeEnum;
}
