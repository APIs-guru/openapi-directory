import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWebhooksV3AppIdSettingsConfigurePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PutWebhooksV3AppIdSettingsConfigureSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PutWebhooksV3AppIdSettingsConfigureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWebhooksV3AppIdSettingsConfigurePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SettingsChangeRequest;

  @SpeakeasyMetadata()
  security: PutWebhooksV3AppIdSettingsConfigureSecurity;
}


export class PutWebhooksV3AppIdSettingsConfigureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingsResponse?: shared.SettingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
