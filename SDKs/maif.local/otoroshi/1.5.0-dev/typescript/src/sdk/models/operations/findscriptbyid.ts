import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindScriptByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class FindScriptByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindScriptByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindScriptByIdPathParams;

  @Metadata()
  security: FindScriptByIdSecurity;
}


export class FindScriptByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  script?: shared.Script;

  @Metadata()
  statusCode: number;
}
