import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OriginBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OriginBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @Metadata()
  security: OriginBatchSecurity;
}


export class OriginBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNameOriginedOut?: shared.BatchFirstLastNameOriginedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
