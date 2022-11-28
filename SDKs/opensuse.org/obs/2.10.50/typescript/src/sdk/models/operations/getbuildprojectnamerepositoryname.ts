import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectNameRepositoryNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetBuildProjectNameRepositoryNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRepositoryNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectNameRepositoryNamePathParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectNameRepositoryNameSecurity;
}


export class GetBuildProjectNameRepositoryNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
