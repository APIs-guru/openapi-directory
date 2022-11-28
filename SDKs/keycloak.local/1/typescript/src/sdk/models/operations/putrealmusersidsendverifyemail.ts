import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmUsersIdSendVerifyEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdSendVerifyEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri?: string;
}


export class PutRealmUsersIdSendVerifyEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersIdSendVerifyEmailPathParams;

  @SpeakeasyMetadata()
  queryParams: PutRealmUsersIdSendVerifyEmailQueryParams;
}


export class PutRealmUsersIdSendVerifyEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
