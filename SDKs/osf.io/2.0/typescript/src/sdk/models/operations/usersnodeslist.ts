import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersNodesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersNodesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersNodesListPathParams;
}


export class UsersNodesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
