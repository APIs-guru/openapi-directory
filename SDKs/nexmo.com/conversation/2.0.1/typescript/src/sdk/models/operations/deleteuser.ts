import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserPathParams;
}


export class DeleteUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteUser200ApplicationJsonObject?: Map<string, any>;
}
