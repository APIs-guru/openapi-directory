import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderFullPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fullName" })
  fullName: string;
}


export class GenderFullSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderFullPathParams;

  @SpeakeasyMetadata()
  security: GenderFullSecurity;
}


export class GenderFullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
