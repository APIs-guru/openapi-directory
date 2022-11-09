import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindClientValidatorByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindClientValidatorByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindClientValidatorByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindClientValidatorByIdPathParams;

  @Metadata()
  security: FindClientValidatorByIdSecurity;
}


export class FindClientValidatorByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationAuthority?: shared.ValidationAuthority;
}
