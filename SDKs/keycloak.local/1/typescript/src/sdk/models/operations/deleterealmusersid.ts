import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmUsersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmUsersIdPathParams;
}


export class DeleteRealmUsersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
