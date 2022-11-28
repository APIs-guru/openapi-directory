import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelLocalization
/** 
 * Channel localization setting
**/
export class ChannelLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
