import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersPreprintsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersPreprintsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersPreprintsListPathParams;
}


export class UsersPreprintsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
