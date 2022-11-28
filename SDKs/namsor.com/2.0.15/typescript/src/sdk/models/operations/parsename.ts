import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameFull" })
  nameFull: string;
}


export class ParseNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParseNamePathParams;

  @SpeakeasyMetadata()
  security: ParseNameSecurity;
}


export class ParseNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
