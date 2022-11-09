import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productNumber" })
  productNumber: string;
}


export class ProductNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ProductNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductNumberPathParams;

  @Metadata()
  security: ProductNumberSecurity;
}


export class ProductNumberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
