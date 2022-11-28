import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameKanjiCandidatesBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameKanjiCandidatesBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: JapaneseNameKanjiCandidatesBatchSecurity;
}


export class JapaneseNameKanjiCandidatesBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
