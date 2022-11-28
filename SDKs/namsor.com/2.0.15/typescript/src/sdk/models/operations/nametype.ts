import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NameTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=properNoun" })
  properNoun: string;
}


export class NameTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NameTypePathParams;

  @SpeakeasyMetadata()
  security: NameTypeSecurity;
}


export class NameTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  properNounCategorizedOut?: shared.ProperNounCategorizedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
