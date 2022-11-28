import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OriginBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OriginBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: OriginBatchSecurity;
}


export class OriginBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameOriginedOut?: shared.BatchFirstLastNameOriginedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
