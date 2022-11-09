import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeauthorizeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeauthorizeRequest extends SpeakeasyBase {
  @Metadata()
  security: DeauthorizeSecurity;
}


export class DeauthorizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deauthorize200ApplicationJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
