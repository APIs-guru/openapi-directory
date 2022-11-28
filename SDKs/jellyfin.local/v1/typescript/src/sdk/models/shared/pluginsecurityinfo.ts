import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PluginSecurityInfo
/** 
 * Plugin security info.
**/
export class PluginSecurityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsMbSupporter" })
  isMbSupporter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupporterKey" })
  supporterKey?: string;
}
