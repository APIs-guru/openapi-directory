import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLongviewClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class DeleteLongviewClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLongviewClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLongviewClientPathParams;

  @SpeakeasyMetadata()
  security: DeleteLongviewClientSecurity;
}


export class DeleteLongviewClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLongviewClient200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLongviewClientDefaultApplicationJsonObject?: DeleteLongviewClientDefaultApplicationJson;
}
