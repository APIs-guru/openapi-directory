import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameMatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class ChineseNameMatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameMatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChineseNameMatchPathParams;

  @Metadata()
  security: ChineseNameMatchSecurity;
}


export class ChineseNameMatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchedOut?: shared.NameMatchedOut;

  @Metadata()
  statusCode: number;
}
