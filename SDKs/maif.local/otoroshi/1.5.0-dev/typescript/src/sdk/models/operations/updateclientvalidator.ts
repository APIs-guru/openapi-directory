import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateClientValidatorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateClientValidatorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateClientValidatorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateClientValidatorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ValidationAuthority;

  @SpeakeasyMetadata()
  security: UpdateClientValidatorSecurity;
}


export class UpdateClientValidatorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationAuthority?: shared.ValidationAuthority;
}
