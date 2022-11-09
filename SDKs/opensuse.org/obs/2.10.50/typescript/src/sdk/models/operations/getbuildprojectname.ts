import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBuildProjectNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}


export class GetBuildProjectNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuildProjectNamePathParams;

  @Metadata()
  security: GetBuildProjectNameSecurity;
}


export class GetBuildProjectNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
