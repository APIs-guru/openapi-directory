import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderJapaneseNameFullPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;
}


export class GenderJapaneseNameFullSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderJapaneseNameFullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderJapaneseNameFullPathParams;

  @SpeakeasyMetadata()
  security: GenderJapaneseNameFullSecurity;
}


export class GenderJapaneseNameFullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
