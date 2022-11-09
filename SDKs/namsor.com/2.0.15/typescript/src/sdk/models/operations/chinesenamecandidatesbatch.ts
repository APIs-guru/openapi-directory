import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameCandidatesBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameCandidatesBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @Metadata()
  security: ChineseNameCandidatesBatchSecurity;
}


export class ChineseNameCandidatesBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
