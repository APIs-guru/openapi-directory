import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveUserFromSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class RemoveUserFromSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveUserFromSessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveUserFromSessionPathParams;

  @Metadata()
  security: RemoveUserFromSessionSecurity;
}


export class RemoveUserFromSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
