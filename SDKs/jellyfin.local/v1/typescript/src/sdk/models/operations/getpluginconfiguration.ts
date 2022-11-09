import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class GetPluginConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginConfigurationPathParams;

  @Metadata()
  security: GetPluginConfigurationSecurity;
}


export class GetPluginConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  basePluginConfiguration?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
