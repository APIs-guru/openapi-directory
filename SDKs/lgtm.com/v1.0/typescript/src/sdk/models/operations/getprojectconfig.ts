import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}

export enum GetProjectConfigSourceEnum {
    Repository = "repository"
,    Administrator = "administrator"
}


export class GetProjectConfigQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetProjectConfigSourceEnum;
}


export class GetProjectConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectConfigPathParams;

  @Metadata()
  queryParams: GetProjectConfigQueryParams;

  @Metadata()
  security: GetProjectConfigSecurity;
}


export class GetProjectConfigResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProjectConfig400ApplicationJsonObject?: Map<string, any>;
}
