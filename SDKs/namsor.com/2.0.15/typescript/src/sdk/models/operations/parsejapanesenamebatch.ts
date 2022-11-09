import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseJapaneseNameBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseJapaneseNameBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @Metadata()
  security: ParseJapaneseNameBatchSecurity;
}


export class ParseJapaneseNameBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
