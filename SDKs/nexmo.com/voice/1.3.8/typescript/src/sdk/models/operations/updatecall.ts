import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class UpdateCallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateCallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCallPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: UpdateCallSecurity;
}


export class UpdateCallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
