import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameLatinCandidatesBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameLatinCandidatesBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: JapaneseNameLatinCandidatesBatchSecurity;
}


export class JapaneseNameLatinCandidatesBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
