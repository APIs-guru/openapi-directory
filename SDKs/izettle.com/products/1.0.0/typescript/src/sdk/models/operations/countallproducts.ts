import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountAllProductsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CountAllProductsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class CountAllProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CountAllProductsPathParams;

  @SpeakeasyMetadata()
  security: CountAllProductsSecurity;
}


export class CountAllProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProductCountResponse })
  productCountResponses?: shared.ProductCountResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
