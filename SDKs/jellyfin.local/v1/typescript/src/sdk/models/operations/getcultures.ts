import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCulturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetCulturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetCulturesSecurity;
}


export class GetCulturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CultureDto })
  cultureDtos?: shared.CultureDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
