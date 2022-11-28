import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OriginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class OriginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OriginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OriginPathParams;

  @SpeakeasyMetadata()
  security: OriginSecurity;
}


export class OriginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameOriginedOut?: shared.FirstLastNameOriginedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
