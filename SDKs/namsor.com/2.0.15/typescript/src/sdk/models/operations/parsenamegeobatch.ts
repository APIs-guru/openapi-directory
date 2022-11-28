import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseNameGeoBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameGeoBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameGeoIn;

  @SpeakeasyMetadata()
  security: ParseNameGeoBatchSecurity;
}


export class ParseNameGeoBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
