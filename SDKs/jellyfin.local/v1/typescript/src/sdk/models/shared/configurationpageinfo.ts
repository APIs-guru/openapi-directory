import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationPageTypeEnum } from "./configurationpagetypeenum";



// ConfigurationPageInfo
/** 
 * The configuration page info.
**/
export class ConfigurationPageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationPageType" })
  configurationPageType?: ConfigurationPageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableInMainMenu" })
  enableInMainMenu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MenuIcon" })
  menuIcon?: string;

  @SpeakeasyMetadata({ data: "json, name=MenuSection" })
  menuSection?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PluginId" })
  pluginId?: string;
}
