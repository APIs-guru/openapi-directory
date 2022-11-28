import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePluginConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class UpdatePluginConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdatePluginConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePluginConfigurationPathParams;

  @SpeakeasyMetadata()
  security: UpdatePluginConfigurationSecurity;
}


export class UpdatePluginConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
