import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CHANGEACCOUNTSETTINGS_SERVERS = [
	"https://rest.nexmo.com",
];



export class ChangeAccountSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class ChangeAccountSettingsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ChangeAccountSettingsQueryParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: shared.AccountSettingsRequest;
}


export class ChangeAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountSettings?: shared.AccountSettings;
}
