import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseChineseNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class ParseChineseNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseChineseNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ParseChineseNamePathParams;

  @Metadata()
  security: ParseChineseNameSecurity;
}


export class ParseChineseNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @Metadata()
  statusCode: number;
}
