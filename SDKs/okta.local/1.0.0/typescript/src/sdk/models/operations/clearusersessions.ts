import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClearUserSessionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ClearUserSessionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClearUserSessionsPathParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class ClearUserSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
