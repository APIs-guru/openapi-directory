import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteClientValidatorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteClientValidatorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteClientValidatorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteClientValidatorPathParams;

  @Metadata()
  security: DeleteClientValidatorSecurity;
}


export class DeleteClientValidatorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
