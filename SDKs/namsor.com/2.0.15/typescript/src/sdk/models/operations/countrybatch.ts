import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountryBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CountryBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @SpeakeasyMetadata()
  security: CountryBatchSecurity;
}


export class CountryBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameGeoOut?: shared.BatchPersonalNameGeoOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
