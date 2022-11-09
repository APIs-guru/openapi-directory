import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseNameBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @Metadata()
  security: ParseNameBatchSecurity;
}


export class ParseNameBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
