import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnablePluginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: shared.Version;
}


export class EnablePluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class EnablePluginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnablePluginPathParams;

  @Metadata()
  security: EnablePluginSecurity;
}


export class EnablePluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
