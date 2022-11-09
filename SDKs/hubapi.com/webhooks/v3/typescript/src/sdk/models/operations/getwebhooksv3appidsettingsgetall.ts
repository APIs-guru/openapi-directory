import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksV3AppIdSettingsGetAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetWebhooksV3AppIdSettingsGetAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSettingsGetAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksV3AppIdSettingsGetAllPathParams;

  @Metadata()
  security: GetWebhooksV3AppIdSettingsGetAllSecurity;
}


export class GetWebhooksV3AppIdSettingsGetAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  settingsResponse?: shared.SettingsResponse;

  @Metadata()
  statusCode: number;
}
