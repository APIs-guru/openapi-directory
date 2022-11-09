import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Request;

  @Metadata()
  security: PostSecurity;
}


export class PostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  response?: shared.Response;

  @Metadata()
  statusCode: number;
}
