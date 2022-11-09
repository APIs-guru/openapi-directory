import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelSectionLocalization
/** 
 * ChannelSection localization setting
**/
export class ChannelSectionLocalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}
