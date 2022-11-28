import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderFullBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @SpeakeasyMetadata()
  security: GenderFullBatchSecurity;
}


export class GenderFullBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
