import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;
}


export class AuthorizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AuthorizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizeQueryParams;

  @SpeakeasyMetadata()
  security: AuthorizeSecurity;
}


export class AuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorize200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
