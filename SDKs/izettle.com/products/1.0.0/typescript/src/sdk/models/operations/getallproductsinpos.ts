import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllProductsInPosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllProductsInPosSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetAllProductsInPosSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetAllProductsInPosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllProductsInPosSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllProductsInPosSecurityOption2;
}


export class GetAllProductsInPosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllProductsInPosPathParams;

  @Metadata()
  security: GetAllProductsInPosSecurity;
}


export class GetAllProductsInPosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProductResponse })
  productResponses?: shared.ProductResponse[];

  @Metadata()
  statusCode: number;
}
