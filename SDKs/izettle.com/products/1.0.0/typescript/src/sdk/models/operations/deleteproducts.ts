import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProductsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class DeleteProductsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uuid" })
  uuid: string[];
}


export class DeleteProductsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class DeleteProductsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class DeleteProductsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteProductsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteProductsSecurityOption2;
}


export class DeleteProductsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsPathParams;

  @Metadata()
  queryParams: DeleteProductsQueryParams;

  @Metadata()
  security: DeleteProductsSecurity;
}


export class DeleteProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
