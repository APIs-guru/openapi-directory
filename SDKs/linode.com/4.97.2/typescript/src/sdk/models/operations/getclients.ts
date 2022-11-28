import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetClientsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetClients200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.OAuthClient })
  data?: shared.OAuthClient[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetClientsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClientsQueryParams;

  @SpeakeasyMetadata()
  security: GetClientsSecurity;
}


export class GetClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClients200ApplicationJsonObject?: GetClients200ApplicationJson;

  @SpeakeasyMetadata()
  getClientsDefaultApplicationJsonObject?: GetClientsDefaultApplicationJson;
}
