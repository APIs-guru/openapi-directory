import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class UpdateProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProductPathParams;

  @SpeakeasyMetadata()
  headers: UpdateProductHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProductUpdateRequest;

  @SpeakeasyMetadata()
  security: UpdateProductSecurity;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
