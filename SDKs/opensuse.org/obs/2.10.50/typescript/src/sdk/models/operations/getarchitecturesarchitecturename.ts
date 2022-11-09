import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetArchitecturesArchitectureNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;
}


export class GetArchitecturesArchitectureNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetArchitecturesArchitectureNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetArchitecturesArchitectureNamePathParams;

  @Metadata()
  security: GetArchitecturesArchitectureNameSecurity;
}


export class GetArchitecturesArchitectureNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
