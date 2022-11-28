import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServicesForALinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=line" })
  line: string;
}


export class ServicesForALineSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServicesForALineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServicesForALinePathParams;

  @SpeakeasyMetadata()
  security: ServicesForALineSecurity;
}


export class ServicesForALineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Service })
  services?: shared.Service[];

  @SpeakeasyMetadata()
  statusCode: number;
}
