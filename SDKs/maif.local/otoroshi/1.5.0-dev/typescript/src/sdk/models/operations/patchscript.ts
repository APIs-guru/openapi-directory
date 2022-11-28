import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class PatchScriptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchScriptPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchScriptSecurity;
}


export class PatchScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  script?: shared.Script;

  @SpeakeasyMetadata()
  statusCode: number;
}
