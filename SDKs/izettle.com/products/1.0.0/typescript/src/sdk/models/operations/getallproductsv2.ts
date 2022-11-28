import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllProductsV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllProductsV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: boolean;
}


export class GetAllProductsV2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetAllProductsV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllProductsV2PathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllProductsV2QueryParams;

  @SpeakeasyMetadata()
  security: GetAllProductsV2Security;
}


export class GetAllProductsV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ProductResponse })
  productResponses?: shared.ProductResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
