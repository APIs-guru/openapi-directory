import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUsersUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdPathParams;
}


export class GetUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
