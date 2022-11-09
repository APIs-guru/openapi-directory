import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmUsersIdConsentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdConsentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdConsentsPathParams;
}


export class GetRealmUsersIdConsentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmUsersIdConsents2XxApplicationJsonObjects?: Map<string, any>[];

  @Metadata()
  statusCode: number;
}
