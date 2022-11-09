import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseNameGeoBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameGeoBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameGeoIn;

  @Metadata()
  security: ParseNameGeoBatchSecurity;
}


export class ParseNameGeoBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
