import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CorridorBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CorridorBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchCorridorIn;

  @Metadata()
  security: CorridorBatchSecurity;
}


export class CorridorBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchCorridorOut?: shared.BatchCorridorOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
