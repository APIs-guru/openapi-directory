import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PinyinChineseNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class PinyinChineseNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PinyinChineseNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PinyinChineseNamePathParams;

  @SpeakeasyMetadata()
  security: PinyinChineseNameSecurity;
}


export class PinyinChineseNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
