import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateUser200ApplicationJsonAny?: any;
}
