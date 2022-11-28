import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseJapaneseNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;
}


export class ParseJapaneseNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseJapaneseNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParseJapaneseNamePathParams;

  @SpeakeasyMetadata()
  security: ParseJapaneseNameSecurity;
}


export class ParseJapaneseNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
