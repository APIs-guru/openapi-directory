import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderChineseNameBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNameBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @Metadata()
  security: GenderChineseNameBatchSecurity;
}


export class GenderChineseNameBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchPersonalNameGenderedOut?: shared.BatchPersonalNameGenderedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
