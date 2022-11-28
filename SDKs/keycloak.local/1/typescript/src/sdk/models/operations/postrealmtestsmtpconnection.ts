import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmTestSmtpConnectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmTestSmtpConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmTestSmtpConnectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmTestSmtpConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
