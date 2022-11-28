import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productNumber" })
  productNumber: string;
}


export class DeleteProductQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" })
  forceCascade?: boolean;
}


export class DeleteProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductQueryParams;

  @SpeakeasyMetadata()
  security: DeleteProductSecurity;
}


export class DeleteProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
