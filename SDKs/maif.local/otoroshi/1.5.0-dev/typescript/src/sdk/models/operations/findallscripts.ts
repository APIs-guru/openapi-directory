import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindAllScriptsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllScriptsRequest extends SpeakeasyBase {
  @Metadata()
  security: FindAllScriptsSecurity;
}


export class FindAllScriptsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Script })
  scripts?: shared.Script[];

  @Metadata()
  statusCode: number;
}
