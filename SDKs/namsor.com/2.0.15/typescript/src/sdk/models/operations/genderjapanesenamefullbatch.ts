import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderJapaneseNameFullBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNameFullBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @Metadata()
  security: GenderJapaneseNameFullBatchSecurity;
}


export class GenderJapaneseNameFullBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
