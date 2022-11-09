import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PinyinChineseNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class PinyinChineseNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PinyinChineseNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PinyinChineseNamePathParams;

  @Metadata()
  security: PinyinChineseNameSecurity;
}


export class PinyinChineseNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @Metadata()
  statusCode: number;
}
