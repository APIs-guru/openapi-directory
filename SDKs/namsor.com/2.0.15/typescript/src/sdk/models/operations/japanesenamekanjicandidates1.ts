import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameKanjiCandidates1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameKanjiCandidates1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameKanjiCandidates1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JapaneseNameKanjiCandidates1PathParams;

  @SpeakeasyMetadata()
  security: JapaneseNameKanjiCandidates1Security;
}


export class JapaneseNameKanjiCandidates1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
