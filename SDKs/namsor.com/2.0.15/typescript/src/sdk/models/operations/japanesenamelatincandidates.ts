import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameLatinCandidatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameKanji" })
  japaneseGivenNameKanji: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameKanji" })
  japaneseSurnameKanji: string;
}


export class JapaneseNameLatinCandidatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameLatinCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JapaneseNameLatinCandidatesPathParams;

  @Metadata()
  security: JapaneseNameLatinCandidatesSecurity;
}


export class JapaneseNameLatinCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @Metadata()
  statusCode: number;
}
