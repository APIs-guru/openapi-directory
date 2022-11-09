import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameKanjiCandidates1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameKanjiCandidates1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameKanjiCandidates1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: JapaneseNameKanjiCandidates1PathParams;

  @Metadata()
  security: JapaneseNameKanjiCandidates1Security;
}


export class JapaneseNameKanjiCandidates1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @Metadata()
  statusCode: number;
}
