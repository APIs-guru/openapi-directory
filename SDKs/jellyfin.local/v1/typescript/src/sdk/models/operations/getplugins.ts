import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPluginsSecurity;
}


export class GetPluginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PluginInfo })
  pluginInfos?: shared.PluginInfo[];

  @Metadata()
  statusCode: number;
}
