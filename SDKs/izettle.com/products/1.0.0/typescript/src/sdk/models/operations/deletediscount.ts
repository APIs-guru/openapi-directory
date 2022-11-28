import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDiscountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" })
  discountUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class DeleteDiscountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class DeleteDiscountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDiscountPathParams;

  @SpeakeasyMetadata()
  security: DeleteDiscountSecurity;
}


export class DeleteDiscountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
