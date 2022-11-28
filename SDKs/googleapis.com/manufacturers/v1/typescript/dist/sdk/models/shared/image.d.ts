import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingProcessing = "PENDING_PROCESSING",
    PendingCrawl = "PENDING_CRAWL",
    Ok = "OK",
    Roboted = "ROBOTED",
    Xroboted = "XROBOTED",
    CrawlError = "CRAWL_ERROR",
    ProcessingError = "PROCESSING_ERROR",
    DecodingError = "DECODING_ERROR",
    TooBig = "TOO_BIG",
    CrawlSkipped = "CRAWL_SKIPPED",
    Hostloaded = "HOSTLOADED",
    Http404 = "HTTP_404"
}
export declare enum ImageTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Crawled = "CRAWLED",
    Uploaded = "UPLOADED"
}
/**
 * An image.
**/
export declare class Image extends SpeakeasyBase {
    imageUrl?: string;
    status?: ImageStatusEnum;
    type?: ImageTypeEnum;
}
