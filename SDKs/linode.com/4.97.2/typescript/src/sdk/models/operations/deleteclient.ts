import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class DeleteClientSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteClientDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteClientPathParams;

  @SpeakeasyMetadata()
  security: DeleteClientSecurity;
}


export class DeleteClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteClient200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteClientDefaultApplicationJsonObject?: DeleteClientDefaultApplicationJson;
}
