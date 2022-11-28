import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLongviewClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLongviewClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LongviewClientInput;

  @SpeakeasyMetadata()
  security: CreateLongviewClientSecurity;
}


export class CreateLongviewClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  longviewClient?: shared.LongviewClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLongviewClientDefaultApplicationJsonObject?: CreateLongviewClientDefaultApplicationJson;
}
