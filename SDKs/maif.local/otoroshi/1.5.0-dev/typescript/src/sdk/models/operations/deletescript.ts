import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class DeleteScriptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteScriptPathParams;

  @Metadata()
  security: DeleteScriptSecurity;
}


export class DeleteScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
