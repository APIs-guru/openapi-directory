import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserPathParams;
}


export class GetUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUser200ApplicationJsonAny?: any;
}
