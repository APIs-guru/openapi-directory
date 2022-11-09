import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersPreprintsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersPreprintsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersPreprintsListPathParams;
}


export class UsersPreprintsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
