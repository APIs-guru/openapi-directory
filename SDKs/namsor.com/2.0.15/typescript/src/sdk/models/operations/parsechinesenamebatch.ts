import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseChineseNameBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseChineseNameBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @SpeakeasyMetadata()
  security: ParseChineseNameBatchSecurity;
}


export class ParseChineseNameBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
