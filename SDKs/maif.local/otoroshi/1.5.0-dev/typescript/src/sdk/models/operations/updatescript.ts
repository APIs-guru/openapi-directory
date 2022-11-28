import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class UpdateScriptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScriptPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Script;

  @SpeakeasyMetadata()
  security: UpdateScriptSecurity;
}


export class UpdateScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  script?: shared.Script;

  @SpeakeasyMetadata()
  statusCode: number;
}
