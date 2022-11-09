import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDiscountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" })
  discountUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class UpdateDiscountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateDiscountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class UpdateDiscountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class UpdateDiscountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateDiscountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateDiscountSecurityOption2;
}


export class UpdateDiscountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDiscountPathParams;

  @Metadata()
  headers: UpdateDiscountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiscountRequest;

  @Metadata()
  security: UpdateDiscountSecurity;
}


export class UpdateDiscountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
