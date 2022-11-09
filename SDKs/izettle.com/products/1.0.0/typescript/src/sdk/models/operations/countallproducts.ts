import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CountAllProductsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CountAllProductsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CountAllProductsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CountAllProductsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CountAllProductsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CountAllProductsSecurityOption2;
}


export class CountAllProductsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CountAllProductsPathParams;

  @Metadata()
  security: CountAllProductsSecurity;
}


export class CountAllProductsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProductCountResponse })
  productCountResponses?: shared.ProductCountResponse[];

  @Metadata()
  statusCode: number;
}
