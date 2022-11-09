import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisablePluginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: shared.Version;
}


export class DisablePluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DisablePluginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisablePluginPathParams;

  @Metadata()
  security: DisablePluginSecurity;
}


export class DisablePluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
