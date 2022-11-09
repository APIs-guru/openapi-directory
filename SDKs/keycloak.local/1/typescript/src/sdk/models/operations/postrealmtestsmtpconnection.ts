import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmTestSmtpConnectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmTestSmtpConnectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmTestSmtpConnectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmTestSmtpConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
