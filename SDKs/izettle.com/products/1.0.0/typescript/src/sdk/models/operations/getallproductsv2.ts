import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllProductsV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllProductsV2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: boolean;
}


export class GetAllProductsV2SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetAllProductsV2SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetAllProductsV2Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllProductsV2SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllProductsV2SecurityOption2;
}


export class GetAllProductsV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllProductsV2PathParams;

  @Metadata()
  queryParams: GetAllProductsV2QueryParams;

  @Metadata()
  security: GetAllProductsV2Security;
}


export class GetAllProductsV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ProductResponse })
  productResponses?: shared.ProductResponse[];

  @Metadata()
  statusCode: number;
}
