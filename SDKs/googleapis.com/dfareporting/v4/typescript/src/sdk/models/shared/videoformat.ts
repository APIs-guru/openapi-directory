import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Size } from "./size";

export enum VideoFormatFileTypeEnum {
    Flv = "FLV"
,    Threegpp = "THREEGPP"
,    Mp4 = "MP4"
,    Webm = "WEBM"
,    M3U8 = "M3U8"
}


// VideoFormat
/** 
 * Contains information about supported video formats.
**/
export class VideoFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileType" })
  fileType?: VideoFormatFileTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: Size;

  @Metadata({ data: "json, name=targetBitRate" })
  targetBitRate?: number;
}
