import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}

export enum GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum {
    Pkgnames = "pkgnames",
    Revpkgnames = "revpkgnames",
    Order = "order"
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
