import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
