import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameLatinCandidatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameKanji" })
  japaneseGivenNameKanji: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameKanji" })
  japaneseSurnameKanji: string;
}


export class JapaneseNameLatinCandidatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameLatinCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JapaneseNameLatinCandidatesPathParams;

  @SpeakeasyMetadata()
  security: JapaneseNameLatinCandidatesSecurity;
}


export class JapaneseNameLatinCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
