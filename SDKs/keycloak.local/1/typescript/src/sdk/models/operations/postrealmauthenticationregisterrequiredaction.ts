import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRealmAuthenticationRegisterRequiredActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationRegisterRequiredActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmAuthenticationRegisterRequiredActionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationRegisterRequiredActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
