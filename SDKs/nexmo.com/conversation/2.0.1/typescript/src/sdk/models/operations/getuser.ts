import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserPathParams;
}


export class GetUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUser200ApplicationJsonAny?: any;
}
