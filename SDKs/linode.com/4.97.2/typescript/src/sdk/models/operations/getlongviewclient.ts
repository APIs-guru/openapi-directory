import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLongviewClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class GetLongviewClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLongviewClientPathParams;

  @SpeakeasyMetadata()
  security: GetLongviewClientSecurity;
}


export class GetLongviewClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  longviewClient?: shared.LongviewClient;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLongviewClientDefaultApplicationJsonObject?: GetLongviewClientDefaultApplicationJson;
}
