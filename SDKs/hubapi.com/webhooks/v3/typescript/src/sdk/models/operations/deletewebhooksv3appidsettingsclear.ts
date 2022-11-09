import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWebhooksV3AppIdSettingsClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class DeleteWebhooksV3AppIdSettingsClearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteWebhooksV3AppIdSettingsClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhooksV3AppIdSettingsClearPathParams;

  @Metadata()
  security: DeleteWebhooksV3AppIdSettingsClearSecurity;
}


export class DeleteWebhooksV3AppIdSettingsClearResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
