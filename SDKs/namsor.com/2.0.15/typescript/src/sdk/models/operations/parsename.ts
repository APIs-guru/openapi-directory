import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameFull" })
  nameFull: string;
}


export class ParseNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ParseNamePathParams;

  @Metadata()
  security: ParseNameSecurity;
}


export class ParseNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @Metadata()
  statusCode: number;
}
