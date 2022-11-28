import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const RegisterSenderServerList = [
	"https://rest.nexmo.com",
] as const;


export class RegisterSenderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class RegisterSenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: RegisterSenderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterEmailRequest;
}


export class RegisterSenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  registerEmailResponse?: shared.RegisterEmailResponse;
}
