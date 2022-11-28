import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";


export enum VideoFormatFileTypeEnum {
    Flv = "FLV",
    Threegpp = "THREEGPP",
    Mp4 = "MP4",
    Webm = "WEBM",
    M3U8 = "M3U8"
}


// VideoFormat
/** 
 * Contains information about supported video formats.
**/
export class VideoFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: VideoFormatFileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: Size;

  @SpeakeasyMetadata({ data: "json, name=targetBitRate" })
  targetBitRate?: number;
}
