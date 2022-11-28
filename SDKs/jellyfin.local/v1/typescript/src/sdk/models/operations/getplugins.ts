import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPluginsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPluginsSecurity;
}


export class GetPluginsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PluginInfo })
  pluginInfos?: shared.PluginInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
