import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderFullGeoBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullGeoBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameGeoIn;

  @SpeakeasyMetadata()
  security: GenderFullGeoBatchSecurity;
}


export class GenderFullGeoBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
