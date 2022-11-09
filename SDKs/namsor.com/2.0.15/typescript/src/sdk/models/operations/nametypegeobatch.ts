import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NameTypeGeoBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeGeoBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchNameGeoIn;

  @Metadata()
  security: NameTypeGeoBatchSecurity;
}


export class NameTypeGeoBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
