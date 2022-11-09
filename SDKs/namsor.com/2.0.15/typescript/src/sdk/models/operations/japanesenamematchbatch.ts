import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameMatchBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchMatchPersonalFirstLastNameIn;

  @Metadata()
  security: JapaneseNameMatchBatchSecurity;
}


export class JapaneseNameMatchBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchedOut?: shared.BatchNameMatchedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
