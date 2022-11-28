import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonLoginGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class GetPersonLoginGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPersonLoginGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPersonLoginGroupPathParams;

  @SpeakeasyMetadata()
  security: GetPersonLoginGroupSecurity;
}


export class GetPersonLoginGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
