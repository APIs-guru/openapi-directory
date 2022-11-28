import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum {
    Repository = "_repository"
}


export class PutBuildProjectRepositoryArchitecturePackageFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_name" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum[];

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class PutBuildProjectRepositoryArchitecturePackageFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutBuildProjectRepositoryArchitecturePackageFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBuildProjectRepositoryArchitecturePackageFilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=plain/text" })
  request?: string;

  @SpeakeasyMetadata()
  security: PutBuildProjectRepositoryArchitecturePackageFileSecurity;
}


export class PutBuildProjectRepositoryArchitecturePackageFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
