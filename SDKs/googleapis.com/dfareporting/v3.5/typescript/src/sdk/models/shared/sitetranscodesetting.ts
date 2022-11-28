import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SiteTranscodeSetting
/** 
 * Transcode Settings
**/
export class SiteTranscodeSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledVideoFormats" })
  enabledVideoFormats?: number[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
