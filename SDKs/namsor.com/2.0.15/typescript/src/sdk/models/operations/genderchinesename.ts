import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderChineseNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" })
  chineseName: string;
}


export class GenderChineseNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderChineseNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderChineseNamePathParams;

  @SpeakeasyMetadata()
  security: GenderChineseNameSecurity;
}


export class GenderChineseNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
