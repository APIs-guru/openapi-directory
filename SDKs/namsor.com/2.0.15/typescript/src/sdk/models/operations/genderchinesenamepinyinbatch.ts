import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderChineseNamePinyinBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNamePinyinBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchFirstLastNameIn;

  @Metadata()
  security: GenderChineseNamePinyinBatchSecurity;
}


export class GenderChineseNamePinyinBatchResponse extends SpeakeasyBase {
  @Metadata()
  batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
