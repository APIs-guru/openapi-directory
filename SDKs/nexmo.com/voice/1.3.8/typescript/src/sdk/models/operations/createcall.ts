import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateCallRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: CreateCallSecurity;
}


export class CreateCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCallResponse?: shared.CreateCallResponse;

  @Metadata()
  statusCode: number;
}
