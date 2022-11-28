import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClearUserSessionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ClearUserSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClearUserSessionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class ClearUserSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
