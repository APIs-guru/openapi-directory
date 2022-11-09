import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UninstallPluginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class UninstallPluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UninstallPluginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UninstallPluginPathParams;

  @Metadata()
  security: UninstallPluginSecurity;
}


export class UninstallPluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
