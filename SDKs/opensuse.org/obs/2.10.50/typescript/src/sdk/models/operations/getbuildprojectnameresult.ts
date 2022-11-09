import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBuildProjectNameResultPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}

export enum GetBuildProjectNameResultViewEnum {
    Summary = "summary"
,    Status = "status"
,    Binarylist = "binarylist"
}


export class GetBuildProjectNameResultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastbuild" })
  lastbuild?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locallink" })
  locallink?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=multibuild" })
  multibuild?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetBuildProjectNameResultViewEnum;
}


export class GetBuildProjectNameResultSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameResultRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuildProjectNameResultPathParams;

  @Metadata()
  queryParams: GetBuildProjectNameResultQueryParams;

  @Metadata()
  security: GetBuildProjectNameResultSecurity;
}


export class GetBuildProjectNameResultResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
