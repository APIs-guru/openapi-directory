import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksV3AppIdSettingsGetAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetWebhooksV3AppIdSettingsGetAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSettingsGetAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksV3AppIdSettingsGetAllPathParams;

  @SpeakeasyMetadata()
  security: GetWebhooksV3AppIdSettingsGetAllSecurity;
}


export class GetWebhooksV3AppIdSettingsGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingsResponse?: shared.SettingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
