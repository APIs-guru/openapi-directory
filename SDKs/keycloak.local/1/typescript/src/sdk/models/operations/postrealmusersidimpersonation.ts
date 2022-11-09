import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmUsersIdImpersonationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersIdImpersonationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersIdImpersonationPathParams;
}


export class PostRealmUsersIdImpersonationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postRealmUsersIdImpersonation2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
