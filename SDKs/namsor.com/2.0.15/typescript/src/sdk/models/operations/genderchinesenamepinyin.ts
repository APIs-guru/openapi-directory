import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderChineseNamePinyinPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class GenderChineseNamePinyinSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNamePinyinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderChineseNamePinyinPathParams;

  @SpeakeasyMetadata()
  security: GenderChineseNamePinyinSecurity;
}


export class GenderChineseNamePinyinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
