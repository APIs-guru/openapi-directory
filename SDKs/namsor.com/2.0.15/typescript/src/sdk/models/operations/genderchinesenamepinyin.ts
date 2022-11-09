import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderChineseNamePinyinPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class GenderChineseNamePinyinSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNamePinyinRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderChineseNamePinyinPathParams;

  @Metadata()
  security: GenderChineseNamePinyinSecurity;
}


export class GenderChineseNamePinyinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @Metadata()
  statusCode: number;
}
