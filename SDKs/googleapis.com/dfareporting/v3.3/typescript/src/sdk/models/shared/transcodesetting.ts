import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranscodeSetting
/** 
 * Transcode Settings
**/
export class TranscodeSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledVideoFormats" })
  enabledVideoFormats?: number[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
