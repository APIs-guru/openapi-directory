import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelLocalization
/** 
 * Channel localization setting
**/
export class ChannelLocalization extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
