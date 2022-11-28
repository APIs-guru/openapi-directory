import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PluginStatusEnum } from "./pluginstatusenum";
import { Version } from "./version";



// PluginInfo
/** 
 * This is a serializable stub class that is used by the api to provide information about installed plugins.
**/
export class PluginInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanUninstall" })
  canUninstall?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationFileName" })
  configurationFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=HasImage" })
  hasImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: PluginStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: Version;
}
