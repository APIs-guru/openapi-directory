import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NameTypeGeoBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeGeoBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchNameGeoIn;

  @SpeakeasyMetadata()
  security: NameTypeGeoBatchSecurity;
}


export class NameTypeGeoBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
