import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @Metadata()
  security: GenderBatchSecurity;
}


export class GenderBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
