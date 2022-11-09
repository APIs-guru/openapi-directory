import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderFullPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fullName" })
  fullName: string;
}


export class GenderFullSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderFullPathParams;

  @Metadata()
  security: GenderFullSecurity;
}


export class GenderFullResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @Metadata()
  statusCode: number;
}
