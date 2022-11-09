import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class GetProductHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetProductSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetProductSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProductSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProductSecurityOption2;
}


export class GetProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductPathParams;

  @Metadata()
  headers: GetProductHeaders;

  @Metadata()
  security: GetProductSecurity;
}


export class GetProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  productResponse?: shared.ProductResponse;

  @Metadata()
  statusCode: number;
}
