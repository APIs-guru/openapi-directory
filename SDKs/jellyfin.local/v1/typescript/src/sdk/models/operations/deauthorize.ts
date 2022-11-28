import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeauthorizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeauthorizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: DeauthorizeSecurity;
}


export class DeauthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deauthorize200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
