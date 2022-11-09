import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class PatchScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchScriptPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchScriptSecurity;
}


export class PatchScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  script?: shared.Script;

  @Metadata()
  statusCode: number;
}
