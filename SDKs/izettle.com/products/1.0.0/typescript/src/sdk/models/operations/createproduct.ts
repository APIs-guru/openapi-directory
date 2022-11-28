import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateProductQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnEntity" })
  returnEntity?: boolean;
}


export class CreateProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class CreateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProductPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateProductQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductCreateRequest;

  @SpeakeasyMetadata()
  security: CreateProductSecurity;
}


export class CreateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  productResponse?: shared.ProductResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
