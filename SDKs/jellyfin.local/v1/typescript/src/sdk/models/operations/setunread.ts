import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetUnreadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SetUnreadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetUnreadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetUnreadPathParams;

  @Metadata()
  security: SetUnreadSecurity;
}


export class SetUnreadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
