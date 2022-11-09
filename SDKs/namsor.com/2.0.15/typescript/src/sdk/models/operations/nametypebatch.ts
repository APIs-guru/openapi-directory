import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NameTypeBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchNameIn;

  @Metadata()
  security: NameTypeBatchSecurity;
}


export class NameTypeBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
