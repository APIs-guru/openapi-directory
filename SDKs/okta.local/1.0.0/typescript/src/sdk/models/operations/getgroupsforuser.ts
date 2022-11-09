import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGroupsForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetGroupsForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupsForUserPathParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class GetGroupsForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
