import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CorridorBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CorridorBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchCorridorIn;

  @SpeakeasyMetadata()
  security: CorridorBatchSecurity;
}


export class CorridorBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchCorridorOut?: shared.BatchCorridorOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
