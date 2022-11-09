import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=productUuid" })
  productUuid: string;
}


export class DeleteProductSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class DeleteProductSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class DeleteProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteProductSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteProductSecurityOption2;
}


export class DeleteProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductPathParams;

  @Metadata()
  security: DeleteProductSecurity;
}


export class DeleteProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
