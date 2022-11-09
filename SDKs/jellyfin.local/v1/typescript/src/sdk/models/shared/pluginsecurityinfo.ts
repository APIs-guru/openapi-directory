import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PluginSecurityInfo
/** 
 * Plugin security info.
**/
export class PluginSecurityInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsMbSupporter" })
  isMbSupporter?: boolean;

  @Metadata({ data: "json, name=SupporterKey" })
  supporterKey?: string;
}
