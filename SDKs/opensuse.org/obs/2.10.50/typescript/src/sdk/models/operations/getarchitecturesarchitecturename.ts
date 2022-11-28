import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArchitecturesArchitectureNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;
}


export class GetArchitecturesArchitectureNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetArchitecturesArchitectureNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArchitecturesArchitectureNamePathParams;

  @SpeakeasyMetadata()
  security: GetArchitecturesArchitectureNameSecurity;
}


export class GetArchitecturesArchitectureNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
