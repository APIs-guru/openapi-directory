import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmUsersIdExecuteActionsEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdExecuteActionsEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lifespan" })
  lifespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri?: string;
}


export class PutRealmUsersIdExecuteActionsEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdExecuteActionsEmailPathParams;

  @Metadata()
  queryParams: PutRealmUsersIdExecuteActionsEmailQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PutRealmUsersIdExecuteActionsEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
