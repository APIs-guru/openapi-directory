import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranscodeSetting
/** 
 * Transcode Settings
**/
export class TranscodeSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledVideoFormats" })
  enabledVideoFormats?: number[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
