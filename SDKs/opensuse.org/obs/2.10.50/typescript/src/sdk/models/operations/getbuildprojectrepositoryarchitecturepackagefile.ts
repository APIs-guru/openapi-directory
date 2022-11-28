import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectRepositoryArchitecturePackageFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_name" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetBuildProjectRepositoryArchitecturePackageFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectRepositoryArchitecturePackageFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectRepositoryArchitecturePackageFilePathParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectRepositoryArchitecturePackageFileSecurity;
}


export class GetBuildProjectRepositoryArchitecturePackageFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBuildProjectRepositoryArchitecturePackageFile200ApplicationWildcardBinaryString?: Uint8Array;
}
