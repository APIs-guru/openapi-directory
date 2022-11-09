import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseJapaneseNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;
}


export class ParseJapaneseNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseJapaneseNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ParseJapaneseNamePathParams;

  @Metadata()
  security: ParseJapaneseNameSecurity;
}


export class ParseJapaneseNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @Metadata()
  statusCode: number;
}
