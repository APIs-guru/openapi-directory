import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UninstallPluginByVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: shared.Version;
}


export class UninstallPluginByVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UninstallPluginByVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UninstallPluginByVersionPathParams;

  @Metadata()
  security: UninstallPluginByVersionSecurity;
}


export class UninstallPluginByVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
