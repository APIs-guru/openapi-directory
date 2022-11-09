import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_name" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" })
  packageName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}

export enum GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum {
    Fileinfo = "fileinfo"
,    FileinfoExt = "fileinfo_ext"
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum[];
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams;

  @Metadata()
  queryParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams;

  @Metadata()
  security: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity;
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
