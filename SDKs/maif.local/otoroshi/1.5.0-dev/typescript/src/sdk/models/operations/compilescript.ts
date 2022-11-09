import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompileScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CompileScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Script;

  @Metadata()
  security: CompileScriptSecurity;
}


export class CompileScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scriptCompilationResult?: shared.ScriptCompilationResult;

  @Metadata()
  statusCode: number;
}
