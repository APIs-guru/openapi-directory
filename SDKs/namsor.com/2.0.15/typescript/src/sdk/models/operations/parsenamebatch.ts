import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseNameBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @SpeakeasyMetadata()
  security: ParseNameBatchSecurity;
}


export class ParseNameBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
