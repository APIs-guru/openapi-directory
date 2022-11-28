import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetUserByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class GetUserByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserByIdPathParams;

  @SpeakeasyMetadata()
  security: GetUserByIdSecurity;
}


export class GetUserByIdResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.UserOutput;
}
