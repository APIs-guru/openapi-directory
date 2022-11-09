import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDiscountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discountUuid" })
  discountUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetDiscountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetDiscountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetDiscountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetDiscountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDiscountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDiscountSecurityOption2;
}


export class GetDiscountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDiscountPathParams;

  @Metadata()
  headers: GetDiscountHeaders;

  @Metadata()
  security: GetDiscountSecurity;
}


export class GetDiscountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  discountResponse?: shared.DiscountResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
