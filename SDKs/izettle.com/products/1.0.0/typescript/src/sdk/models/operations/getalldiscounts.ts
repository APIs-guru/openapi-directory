import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllDiscountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllDiscountsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetAllDiscountsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetAllDiscountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllDiscountsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllDiscountsSecurityOption2;
}


export class GetAllDiscountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllDiscountsPathParams;

  @Metadata()
  security: GetAllDiscountsSecurity;
}


export class GetAllDiscountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DiscountResponse })
  discountResponses?: shared.DiscountResponse[];

  @Metadata()
  statusCode: number;
}
