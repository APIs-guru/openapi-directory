import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderFullGeoBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullGeoBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameGeoIn;

  @Metadata()
  security: GenderFullGeoBatchSecurity;
}


export class GenderFullGeoBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
