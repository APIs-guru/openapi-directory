import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OriginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class OriginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OriginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OriginPathParams;

  @Metadata()
  security: OriginSecurity;
}


export class OriginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameOriginedOut?: shared.FirstLastNameOriginedOut;

  @Metadata()
  statusCode: number;
}
