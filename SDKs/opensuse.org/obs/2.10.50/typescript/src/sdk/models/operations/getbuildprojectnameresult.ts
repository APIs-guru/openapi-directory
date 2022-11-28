import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildProjectNameResultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}

export enum GetBuildProjectNameResultViewEnum {
    Summary = "summary",
    Status = "status",
    Binarylist = "binarylist"
}


export class GetBuildProjectNameResultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arch" })
  arch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastbuild" })
  lastbuild?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locallink" })
  locallink?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=multibuild" })
  multibuild?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetBuildProjectNameResultViewEnum;
}


export class GetBuildProjectNameResultSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildProjectNameResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuildProjectNameResultPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBuildProjectNameResultQueryParams;

  @SpeakeasyMetadata()
  security: GetBuildProjectNameResultSecurity;
}


export class GetBuildProjectNameResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
