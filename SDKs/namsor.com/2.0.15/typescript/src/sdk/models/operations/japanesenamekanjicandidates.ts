import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameKanjiCandidatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=knownGender" })
  knownGender: string;
}


export class JapaneseNameKanjiCandidatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameKanjiCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JapaneseNameKanjiCandidatesPathParams;

  @SpeakeasyMetadata()
  security: JapaneseNameKanjiCandidatesSecurity;
}


export class JapaneseNameKanjiCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
