import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaFile } from "./mediafile";


export enum VideoMetadataVastVersionEnum {
    VastVersionUnspecified = "VAST_VERSION_UNSPECIFIED",
    VastVersion10 = "VAST_VERSION_1_0",
    VastVersion20 = "VAST_VERSION_2_0",
    VastVersion30 = "VAST_VERSION_3_0",
    VastVersion40 = "VAST_VERSION_4_0"
}


// VideoMetadata
/** 
 * Video metadata for a creative.
**/
export class VideoMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=isValidVast" })
  isValidVast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVpaid" })
  isVpaid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaFiles", elemType: MediaFile })
  mediaFiles?: MediaFile[];

  @SpeakeasyMetadata({ data: "json, name=skipOffset" })
  skipOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=vastVersion" })
  vastVersion?: VideoMetadataVastVersionEnum;
}
