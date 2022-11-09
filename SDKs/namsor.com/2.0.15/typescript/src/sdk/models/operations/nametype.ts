import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NameTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=properNoun" })
  properNoun: string;
}


export class NameTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NameTypePathParams;

  @Metadata()
  security: NameTypeSecurity;
}


export class NameTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  properNounCategorizedOut?: shared.ProperNounCategorizedOut;

  @Metadata()
  statusCode: number;
}
