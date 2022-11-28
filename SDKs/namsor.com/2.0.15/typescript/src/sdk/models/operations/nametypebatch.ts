import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NameTypeBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchNameIn;

  @SpeakeasyMetadata()
  security: NameTypeBatchSecurity;
}


export class NameTypeBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchProperNounCategorizedOut?: shared.BatchProperNounCategorizedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
