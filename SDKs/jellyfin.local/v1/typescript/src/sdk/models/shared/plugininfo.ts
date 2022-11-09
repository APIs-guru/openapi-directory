import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PluginStatusEnum } from "./pluginstatusenum";
import { Version } from "./version";


// PluginInfo
/** 
 * This is a serializable stub class that is used by the api to provide information about installed plugins.
**/
export class PluginInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanUninstall" })
  canUninstall?: boolean;

  @Metadata({ data: "json, name=ConfigurationFileName" })
  configurationFileName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=HasImage" })
  hasImage?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: PluginStatusEnum;

  @Metadata({ data: "json, name=Version" })
  version?: Version;
}
