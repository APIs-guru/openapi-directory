import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class GenderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderPathParams;

  @SpeakeasyMetadata()
  security: GenderSecurity;
}


export class GenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
