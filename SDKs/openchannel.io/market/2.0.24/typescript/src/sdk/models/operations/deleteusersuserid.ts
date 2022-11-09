import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUsersUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUsersUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUsersUserIdPathParams;
}


export class DeleteUsersUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
