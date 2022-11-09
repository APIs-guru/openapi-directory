import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CountryBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CountryBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @Metadata()
  security: CountryBatchSecurity;
}


export class CountryBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameGeoOut?: shared.BatchPersonalNameGeoOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
