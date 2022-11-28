import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams extends SpeakeasyBase {
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

export enum GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum {
    Fileinfo = "fileinfo",
    FileinfoExt = "fileinfo_ext"
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum[];
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity;
}


export class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
