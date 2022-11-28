import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PinyinChineseNameBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PinyinChineseNameBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchPersonalNameIn;

  @SpeakeasyMetadata()
  security: PinyinChineseNameBatchSecurity;
}


export class PinyinChineseNameBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
