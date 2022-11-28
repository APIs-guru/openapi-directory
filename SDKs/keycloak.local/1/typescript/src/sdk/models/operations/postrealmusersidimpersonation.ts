import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmUsersIdImpersonationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdImpersonationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmUsersIdImpersonationPathParams;
}


export class PostRealmUsersIdImpersonationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postRealmUsersIdImpersonation2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
