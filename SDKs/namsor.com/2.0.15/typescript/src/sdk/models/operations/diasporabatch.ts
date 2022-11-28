import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiasporaBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DiasporaBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoIn;

  @SpeakeasyMetadata()
  security: DiasporaBatchSecurity;
}


export class DiasporaBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameDiasporaedOut?: shared.BatchFirstLastNameDiasporaedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
