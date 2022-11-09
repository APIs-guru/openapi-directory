import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}

export enum GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum {
    Pkgnames = "pkgnames"
,    Revpkgnames = "revpkgnames"
,    Order = "order"
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams;

  @Metadata()
  queryParams: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams;

  @Metadata()
  security: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity;
}


export class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
