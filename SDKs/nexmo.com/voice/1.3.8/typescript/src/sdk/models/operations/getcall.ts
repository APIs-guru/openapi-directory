import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCallPathParams;

  @Metadata()
  security: GetCallSecurity;
}


export class GetCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCallResponse?: shared.GetCallResponse;

  @Metadata()
  statusCode: number;
}
