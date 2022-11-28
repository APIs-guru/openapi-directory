import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChineseNameCandidatesBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameCandidatesBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: ChineseNameCandidatesBatchSecurity;
}


export class ChineseNameCandidatesBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
