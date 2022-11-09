import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameKanjiCandidatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=knownGender" })
  knownGender: string;
}


export class JapaneseNameKanjiCandidatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameKanjiCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JapaneseNameKanjiCandidatesPathParams;

  @Metadata()
  security: JapaneseNameKanjiCandidatesSecurity;
}


export class JapaneseNameKanjiCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @Metadata()
  statusCode: number;
}
