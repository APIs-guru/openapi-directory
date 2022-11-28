import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRealmAuthenticationRegisterRequiredActionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmAuthenticationRegisterRequiredActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmAuthenticationRegisterRequiredActionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostRealmAuthenticationRegisterRequiredActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
