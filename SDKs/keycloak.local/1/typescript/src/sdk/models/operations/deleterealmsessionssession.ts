import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmSessionsSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class DeleteRealmSessionsSessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmSessionsSessionPathParams;
}


export class DeleteRealmSessionsSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
