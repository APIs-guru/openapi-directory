import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePluginConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class UpdatePluginConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdatePluginConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePluginConfigurationPathParams;

  @Metadata()
  security: UpdatePluginConfigurationSecurity;
}


export class UpdatePluginConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
