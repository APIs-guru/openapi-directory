import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderJapaneseNamePinyinPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenName" })
  japaneseGivenName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurname" })
  japaneseSurname: string;
}


export class GenderJapaneseNamePinyinSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNamePinyinRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderJapaneseNamePinyinPathParams;

  @Metadata()
  security: GenderJapaneseNamePinyinSecurity;
}


export class GenderJapaneseNamePinyinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @Metadata()
  statusCode: number;
}
