import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CuepointCueTypeEnum {
    CueTypeUnspecified = "cueTypeUnspecified"
,    CueTypeAd = "cueTypeAd"
}


// Cuepoint
/** 
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
**/
export class Cuepoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=cueType" })
  cueType?: CuepointCueTypeEnum;

  @Metadata({ data: "json, name=durationSecs" })
  durationSecs?: number;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertionOffsetTimeMs" })
  insertionOffsetTimeMs?: string;

  @Metadata({ data: "json, name=walltimeMs" })
  walltimeMs?: string;
}
