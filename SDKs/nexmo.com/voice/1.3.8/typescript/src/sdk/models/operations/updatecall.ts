import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class UpdateCallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdateCallSecurity;
}


export class UpdateCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
