import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderJapaneseNameFullPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;
}


export class GenderJapaneseNameFullSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNameFullRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderJapaneseNameFullPathParams;

  @Metadata()
  security: GenderJapaneseNameFullSecurity;
}


export class GenderJapaneseNameFullResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @Metadata()
  statusCode: number;
}
