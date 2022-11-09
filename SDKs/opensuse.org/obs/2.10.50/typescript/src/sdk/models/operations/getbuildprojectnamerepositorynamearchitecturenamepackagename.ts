import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams;

  @Metadata()
  security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity;
}


export class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
