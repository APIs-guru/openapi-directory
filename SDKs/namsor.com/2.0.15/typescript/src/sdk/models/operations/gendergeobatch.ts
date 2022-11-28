import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderGeoBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderGeoBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameGeoIn;

  @SpeakeasyMetadata()
  security: GenderGeoBatchSecurity;
}


export class GenderGeoBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
