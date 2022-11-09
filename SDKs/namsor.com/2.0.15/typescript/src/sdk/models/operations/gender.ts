import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class GenderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderPathParams;

  @Metadata()
  security: GenderSecurity;
}


export class GenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @Metadata()
  statusCode: number;
}
