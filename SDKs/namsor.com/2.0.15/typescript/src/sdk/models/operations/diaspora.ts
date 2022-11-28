import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiasporaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class DiasporaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DiasporaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DiasporaPathParams;

  @SpeakeasyMetadata()
  security: DiasporaSecurity;
}


export class DiasporaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameDiasporaedOut?: shared.FirstLastNameDiasporaedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
