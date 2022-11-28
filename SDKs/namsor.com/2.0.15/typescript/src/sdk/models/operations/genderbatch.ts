import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: GenderBatchSecurity;
}


export class GenderBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
