import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersNodesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersNodesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersNodesListPathParams;
}


export class UsersNodesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
