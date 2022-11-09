import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCulturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetCulturesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetCulturesSecurity;
}


export class GetCulturesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CultureDto })
  cultureDtos?: shared.CultureDto[];

  @Metadata()
  statusCode: number;
}
