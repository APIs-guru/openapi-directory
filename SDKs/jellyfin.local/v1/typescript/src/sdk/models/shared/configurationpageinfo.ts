import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationPageTypeEnum } from "./configurationpagetypeenum";


// ConfigurationPageInfo
/** 
 * The configuration page info.
**/
export class ConfigurationPageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationPageType" })
  configurationPageType?: ConfigurationPageTypeEnum;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EnableInMainMenu" })
  enableInMainMenu?: boolean;

  @Metadata({ data: "json, name=MenuIcon" })
  menuIcon?: string;

  @Metadata({ data: "json, name=MenuSection" })
  menuSection?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PluginId" })
  pluginId?: string;
}
