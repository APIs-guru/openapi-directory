import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderJapaneseNamePinyinBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNamePinyinBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @SpeakeasyMetadata()
  security: GenderJapaneseNamePinyinBatchSecurity;
}


export class GenderJapaneseNamePinyinBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
