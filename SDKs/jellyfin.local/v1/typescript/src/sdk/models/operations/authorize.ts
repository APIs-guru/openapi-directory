import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;
}


export class AuthorizeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AuthorizeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizeQueryParams;

  @Metadata()
  security: AuthorizeSecurity;
}


export class AuthorizeResponse extends SpeakeasyBase {
  @Metadata()
  authorize200ApplicationJsonBoolean?: boolean;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
