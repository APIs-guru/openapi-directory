import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWebhooksV3AppIdSettingsClearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class DeleteWebhooksV3AppIdSettingsClearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteWebhooksV3AppIdSettingsClearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhooksV3AppIdSettingsClearPathParams;

  @SpeakeasyMetadata()
  security: DeleteWebhooksV3AppIdSettingsClearSecurity;
}


export class DeleteWebhooksV3AppIdSettingsClearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
