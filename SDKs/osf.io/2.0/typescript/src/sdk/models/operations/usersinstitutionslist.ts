import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersInstitutionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersInstitutionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersInstitutionsListPathParams;
}


export class UsersInstitutionsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
