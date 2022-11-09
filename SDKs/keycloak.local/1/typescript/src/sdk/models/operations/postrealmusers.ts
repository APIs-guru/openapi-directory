import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmUsersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserRepresentation;
}


export class PostRealmUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
