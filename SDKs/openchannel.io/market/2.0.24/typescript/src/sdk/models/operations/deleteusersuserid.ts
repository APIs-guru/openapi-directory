import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUsersUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUsersUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersUserIdPathParams;
}


export class DeleteUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
