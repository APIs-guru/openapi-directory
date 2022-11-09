import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDiscountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" })
  discountUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class DeleteDiscountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class DeleteDiscountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class DeleteDiscountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteDiscountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteDiscountSecurityOption2;
}


export class DeleteDiscountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDiscountPathParams;

  @Metadata()
  security: DeleteDiscountSecurity;
}


export class DeleteDiscountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
