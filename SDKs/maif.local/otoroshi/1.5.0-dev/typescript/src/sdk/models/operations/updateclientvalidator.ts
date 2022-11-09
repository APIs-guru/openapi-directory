import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateClientValidatorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateClientValidatorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateClientValidatorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateClientValidatorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ValidationAuthority;

  @Metadata()
  security: UpdateClientValidatorSecurity;
}


export class UpdateClientValidatorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationAuthority?: shared.ValidationAuthority;
}
