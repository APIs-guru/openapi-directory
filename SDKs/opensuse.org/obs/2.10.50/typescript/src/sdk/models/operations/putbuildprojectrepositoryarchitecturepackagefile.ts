import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum {
    Repository = "_repository"
}


export class PutBuildProjectRepositoryArchitecturePackageFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_name" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum[];

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class PutBuildProjectRepositoryArchitecturePackageFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutBuildProjectRepositoryArchitecturePackageFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutBuildProjectRepositoryArchitecturePackageFilePathParams;

  @Metadata({ data: "request, media_type=plain/text" })
  request?: string;

  @Metadata()
  security: PutBuildProjectRepositoryArchitecturePackageFileSecurity;
}


export class PutBuildProjectRepositoryArchitecturePackageFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
