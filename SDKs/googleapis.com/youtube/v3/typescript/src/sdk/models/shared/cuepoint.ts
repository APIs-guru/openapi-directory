import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CuepointCueTypeEnum {
    CueTypeUnspecified = "cueTypeUnspecified",
    CueTypeAd = "cueTypeAd"
}


// Cuepoint
/** 
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
**/
export class Cuepoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cueType" })
  cueType?: CuepointCueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=durationSecs" })
  durationSecs?: number;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertionOffsetTimeMs" })
  insertionOffsetTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=walltimeMs" })
  walltimeMs?: string;
}
