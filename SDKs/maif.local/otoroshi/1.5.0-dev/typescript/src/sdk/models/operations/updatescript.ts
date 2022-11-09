import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class UpdateScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateScriptPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Script;

  @Metadata()
  security: UpdateScriptSecurity;
}


export class UpdateScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  script?: shared.Script;

  @Metadata()
  statusCode: number;
}
