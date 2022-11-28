import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllDiscountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllDiscountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetAllDiscountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllDiscountsPathParams;

  @SpeakeasyMetadata()
  security: GetAllDiscountsSecurity;
}


export class GetAllDiscountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DiscountResponse })
  discountResponses?: shared.DiscountResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
