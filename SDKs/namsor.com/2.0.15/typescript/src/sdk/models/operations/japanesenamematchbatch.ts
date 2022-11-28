import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameMatchBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchMatchPersonalFirstLastNameIn;

  @SpeakeasyMetadata()
  security: JapaneseNameMatchBatchSecurity;
}


export class JapaneseNameMatchBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchNameMatchedOut?: shared.BatchNameMatchedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
