import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderChineseNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class GenderChineseNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderChineseNamePathParams;

  @Metadata()
  security: GenderChineseNameSecurity;
}


export class GenderChineseNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @Metadata()
  statusCode: number;
}
