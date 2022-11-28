import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UpdateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateUser200ApplicationJsonAny?: any;
}
