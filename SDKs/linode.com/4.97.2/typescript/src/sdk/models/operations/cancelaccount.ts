import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CancelAccount200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=survey_link" })
  surveyLink?: string;
}


export class CancelAccount409ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class CancelAccount409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CancelAccount409ApplicationJsonErrors })
  errors?: CancelAccount409ApplicationJsonErrors[];
}


export class CancelAccountDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CancelAccountSecurity;
}


export class CancelAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelAccount200ApplicationJsonObject?: CancelAccount200ApplicationJson;

  @SpeakeasyMetadata()
  cancelAccount409ApplicationJsonObject?: CancelAccount409ApplicationJson;

  @SpeakeasyMetadata()
  cancelAccountDefaultApplicationJsonObject?: CancelAccountDefaultApplicationJson;
}
