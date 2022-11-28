import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPluginConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class GetPluginConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPluginConfigurationPathParams;

  @SpeakeasyMetadata()
  security: GetPluginConfigurationSecurity;
}


export class GetPluginConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  basePluginConfiguration?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
