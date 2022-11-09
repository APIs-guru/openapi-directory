import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUsersUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdPathParams;
}


export class GetUsersUserIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
