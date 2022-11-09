import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginManifestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;
}


export class GetPluginManifestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginManifestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginManifestPathParams;

  @Metadata()
  security: GetPluginManifestSecurity;
}


export class GetPluginManifestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
