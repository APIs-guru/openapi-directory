import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmUsersIdExecuteActionsEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdExecuteActionsEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lifespan" })
  lifespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri?: string;
}


export class PutRealmUsersIdExecuteActionsEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersIdExecuteActionsEmailPathParams;

  @SpeakeasyMetadata()
  queryParams: PutRealmUsersIdExecuteActionsEmailQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PutRealmUsersIdExecuteActionsEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
