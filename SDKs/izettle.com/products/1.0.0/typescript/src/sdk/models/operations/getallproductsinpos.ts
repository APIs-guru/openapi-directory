import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllProductsInPosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllProductsInPosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetAllProductsInPosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllProductsInPosPathParams;

  @SpeakeasyMetadata()
  security: GetAllProductsInPosSecurity;
}


export class GetAllProductsInPosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProductResponse })
  productResponses?: shared.ProductResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
