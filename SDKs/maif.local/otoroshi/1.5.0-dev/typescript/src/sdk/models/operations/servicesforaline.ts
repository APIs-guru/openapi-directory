import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicesForALinePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=line" })
  line: string;
}


export class ServicesForALineSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServicesForALineRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicesForALinePathParams;

  @Metadata()
  security: ServicesForALineSecurity;
}


export class ServicesForALineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Service })
  services?: shared.Service[];

  @Metadata()
  statusCode: number;
}
