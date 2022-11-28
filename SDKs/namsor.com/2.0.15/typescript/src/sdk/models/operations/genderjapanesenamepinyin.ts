import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderJapaneseNamePinyinPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenName" })
  japaneseGivenName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurname" })
  japaneseSurname: string;
}


export class GenderJapaneseNamePinyinSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNamePinyinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderJapaneseNamePinyinPathParams;

  @SpeakeasyMetadata()
  security: GenderJapaneseNamePinyinSecurity;
}


export class GenderJapaneseNamePinyinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
