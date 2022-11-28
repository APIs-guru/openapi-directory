import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UninstallPluginByVersionPathParamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: shared.Version;
}


export class UninstallPluginByVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UninstallPluginByVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UninstallPluginByVersionPathParamsInput;

  @SpeakeasyMetadata()
  security: UninstallPluginByVersionSecurity;
}


export class UninstallPluginByVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
