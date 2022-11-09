import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmUsersIdSendVerifyEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdSendVerifyEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri?: string;
}


export class PutRealmUsersIdSendVerifyEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdSendVerifyEmailPathParams;

  @Metadata()
  queryParams: PutRealmUsersIdSendVerifyEmailQueryParams;
}


export class PutRealmUsersIdSendVerifyEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
