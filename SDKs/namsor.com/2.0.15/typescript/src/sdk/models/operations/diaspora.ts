import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiasporaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class DiasporaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DiasporaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiasporaPathParams;

  @Metadata()
  security: DiasporaSecurity;
}


export class DiasporaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameDiasporaedOut?: shared.FirstLastNameDiasporaedOut;

  @Metadata()
  statusCode: number;
}
