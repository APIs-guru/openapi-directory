import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class UpdateProductHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateProductSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class UpdateProductSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class UpdateProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateProductSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateProductSecurityOption2;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProductPathParams;

  @Metadata()
  headers: UpdateProductHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductUpdateRequest;

  @Metadata()
  security: UpdateProductSecurity;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
