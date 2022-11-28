import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindClientValidatorByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindClientValidatorByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindClientValidatorByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindClientValidatorByIdPathParams;

  @SpeakeasyMetadata()
  security: FindClientValidatorByIdSecurity;
}


export class FindClientValidatorByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationAuthority?: shared.ValidationAuthority;
}
