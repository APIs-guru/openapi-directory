import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameMatchBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameMatchBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchMatchPersonalFirstLastNameIn;

  @Metadata()
  security: ChineseNameMatchBatchSecurity;
}


export class ChineseNameMatchBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchNameMatchedOut?: shared.BatchNameMatchedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
