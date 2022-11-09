import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchClientValidatorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchClientValidatorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchClientValidatorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchClientValidatorPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchClientValidatorSecurity;
}


export class PatchClientValidatorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationAuthority?: shared.ValidationAuthority;
}
