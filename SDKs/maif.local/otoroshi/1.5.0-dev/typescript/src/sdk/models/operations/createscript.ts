import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Script;

  @Metadata()
  security: CreateScriptSecurity;
}


export class CreateScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  script?: shared.Script;

  @Metadata()
  statusCode: number;
}
