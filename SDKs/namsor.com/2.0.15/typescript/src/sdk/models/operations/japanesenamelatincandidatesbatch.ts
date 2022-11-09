import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameLatinCandidatesBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameLatinCandidatesBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @Metadata()
  security: JapaneseNameLatinCandidatesBatchSecurity;
}


export class JapaneseNameLatinCandidatesBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
