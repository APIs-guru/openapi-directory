import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindScriptByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class FindScriptByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindScriptByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindScriptByIdPathParams;

  @SpeakeasyMetadata()
  security: FindScriptByIdSecurity;
}


export class FindScriptByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  script?: shared.Script;

  @SpeakeasyMetadata()
  statusCode: number;
}
