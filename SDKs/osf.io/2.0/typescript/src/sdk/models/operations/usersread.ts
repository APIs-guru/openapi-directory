import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersReadPathParams;
}


export class UsersReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
