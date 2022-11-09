import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersRegistrationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersRegistrationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersRegistrationsListPathParams;
}


export class UsersRegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
