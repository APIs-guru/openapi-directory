import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetCallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetCallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCallPathParams;

  @SpeakeasyMetadata()
  security: GetCallSecurity;
}


export class GetCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCallResponse?: shared.GetCallResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
