import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindAllScriptsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllScriptsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindAllScriptsSecurity;
}


export class FindAllScriptsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Script })
  scripts?: shared.Script[];

  @SpeakeasyMetadata()
  statusCode: number;
}
