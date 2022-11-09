import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDiscountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateDiscountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CreateDiscountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CreateDiscountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateDiscountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateDiscountSecurityOption2;
}


export class CreateDiscountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDiscountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DiscountRequest;

  @Metadata()
  security: CreateDiscountSecurity;
}


export class CreateDiscountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
