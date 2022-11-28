import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseChineseNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class ParseChineseNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseChineseNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParseChineseNamePathParams;

  @SpeakeasyMetadata()
  security: ParseChineseNameSecurity;
}


export class ParseChineseNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
