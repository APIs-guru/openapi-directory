import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameCandidatesGenderBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameCandidatesGenderBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGenderIn;

  @Metadata()
  security: ChineseNameCandidatesGenderBatchSecurity;
}


export class ChineseNameCandidatesGenderBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
