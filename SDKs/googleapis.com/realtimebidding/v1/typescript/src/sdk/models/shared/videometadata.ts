import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MediaFile } from "./mediafile";

export enum VideoMetadataVastVersionEnum {
    VastVersionUnspecified = "VAST_VERSION_UNSPECIFIED"
,    VastVersion10 = "VAST_VERSION_1_0"
,    VastVersion20 = "VAST_VERSION_2_0"
,    VastVersion30 = "VAST_VERSION_3_0"
,    VastVersion40 = "VAST_VERSION_4_0"
}


// VideoMetadata
/** 
 * Video metadata for a creative.
**/
export class VideoMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=isValidVast" })
  isValidVast?: boolean;

  @Metadata({ data: "json, name=isVpaid" })
  isVpaid?: boolean;

  @Metadata({ data: "json, name=mediaFiles", elemType: shared.MediaFile })
  mediaFiles?: MediaFile[];

  @Metadata({ data: "json, name=skipOffset" })
  skipOffset?: string;

  @Metadata({ data: "json, name=vastVersion" })
  vastVersion?: VideoMetadataVastVersionEnum;
}
