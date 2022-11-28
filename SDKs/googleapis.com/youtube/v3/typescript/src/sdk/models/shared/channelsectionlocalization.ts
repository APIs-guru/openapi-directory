import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelSectionLocalization
/** 
 * ChannelSection localization setting
**/
export class ChannelSectionLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
