import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class GetProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductPathParams;

  @SpeakeasyMetadata()
  headers: GetProductHeaders;

  @SpeakeasyMetadata()
  security: GetProductSecurity;
}


export class GetProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  productResponse?: shared.ProductResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
