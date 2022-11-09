import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWebhooksV3AppIdSettingsConfigurePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PutWebhooksV3AppIdSettingsConfigureSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PutWebhooksV3AppIdSettingsConfigureRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWebhooksV3AppIdSettingsConfigurePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SettingsChangeRequest;

  @Metadata()
  security: PutWebhooksV3AppIdSettingsConfigureSecurity;
}


export class PutWebhooksV3AppIdSettingsConfigureResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  settingsResponse?: shared.SettingsResponse;

  @Metadata()
  statusCode: number;
}
