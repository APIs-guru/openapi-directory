import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SiteTranscodeSetting
/** 
 * Transcode Settings
**/
export class SiteTranscodeSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledVideoFormats" })
  enabledVideoFormats?: number[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
