import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pluginId" })
  pluginId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: shared.Version;
}


export class GetPluginImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPluginImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginImagePathParams;

  @Metadata()
  security: GetPluginImageSecurity;
}


export class GetPluginImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPluginImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
