import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UninstallPluginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class UninstallPluginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UninstallPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UninstallPluginPathParams;

  @SpeakeasyMetadata()
  security: UninstallPluginSecurity;
}


export class UninstallPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
