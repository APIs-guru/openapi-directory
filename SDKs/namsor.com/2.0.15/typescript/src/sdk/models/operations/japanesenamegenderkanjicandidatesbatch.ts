import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameGenderKanjiCandidatesBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameGenderKanjiCandidatesBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGenderIn;

  @Metadata()
  security: JapaneseNameGenderKanjiCandidatesBatchSecurity;
}


export class JapaneseNameGenderKanjiCandidatesBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
