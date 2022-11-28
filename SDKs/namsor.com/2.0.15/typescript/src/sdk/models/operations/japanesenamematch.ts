import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameMatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameMatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JapaneseNameMatchPathParams;

  @SpeakeasyMetadata()
  security: JapaneseNameMatchSecurity;
}


export class JapaneseNameMatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchedOut?: shared.NameMatchedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
