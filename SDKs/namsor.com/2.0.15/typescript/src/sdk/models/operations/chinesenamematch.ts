import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChineseNameMatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class ChineseNameMatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameMatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChineseNameMatchPathParams;

  @SpeakeasyMetadata()
  security: ChineseNameMatchSecurity;
}


export class ChineseNameMatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchedOut?: shared.NameMatchedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
