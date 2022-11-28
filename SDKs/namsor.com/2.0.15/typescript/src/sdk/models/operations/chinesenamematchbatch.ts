import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChineseNameMatchBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameMatchBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchMatchPersonalFirstLastNameIn;

  @SpeakeasyMetadata()
  security: ChineseNameMatchBatchSecurity;
}


export class ChineseNameMatchBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchedOut?: shared.BatchNameMatchedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
