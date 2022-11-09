import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameMatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameMatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JapaneseNameMatchPathParams;

  @Metadata()
  security: JapaneseNameMatchSecurity;
}


export class JapaneseNameMatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchedOut?: shared.NameMatchedOut;

  @Metadata()
  statusCode: number;
}
