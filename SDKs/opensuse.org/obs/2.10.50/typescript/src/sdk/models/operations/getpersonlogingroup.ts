import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonLoginGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=login" })
  login: string;
}


export class GetPersonLoginGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPersonLoginGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPersonLoginGroupPathParams;

  @Metadata()
  security: GetPersonLoginGroupSecurity;
}


export class GetPersonLoginGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
