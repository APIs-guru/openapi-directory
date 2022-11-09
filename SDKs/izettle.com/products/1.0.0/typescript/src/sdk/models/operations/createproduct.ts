import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateProductQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=returnEntity" })
  returnEntity?: boolean;
}


export class CreateProductSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CreateProductSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CreateProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateProductSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateProductSecurityOption2;
}


export class CreateProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProductPathParams;

  @Metadata()
  queryParams: CreateProductQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProductCreateRequest;

  @Metadata()
  security: CreateProductSecurity;
}


export class CreateProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  productResponse?: shared.ProductResponse;

  @Metadata()
  statusCode: number;
}
