import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameGenderKanjiCandidatesBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameGenderKanjiCandidatesBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGenderIn;

  @SpeakeasyMetadata()
  security: JapaneseNameGenderKanjiCandidatesBatchSecurity;
}


export class JapaneseNameGenderKanjiCandidatesBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
