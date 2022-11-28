import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
export declare enum VideoFormatFileTypeEnum {
    Flv = "FLV",
    Threegpp = "THREEGPP",
    Mp4 = "MP4",
    Webm = "WEBM",
    M3U8 = "M3U8"
}
/**
 * Contains information about supported video formats.
**/
export declare class VideoFormat extends SpeakeasyBase {
    fileType?: VideoFormatFileTypeEnum;
    id?: number;
    kind?: string;
    resolution?: Size;
    targetBitRate?: number;
}
