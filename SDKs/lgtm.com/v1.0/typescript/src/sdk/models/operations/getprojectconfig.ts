import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}

export enum GetProjectConfigSourceEnum {
    Repository = "repository",
    Administrator = "administrator"
}


export class GetProjectConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetProjectConfigSourceEnum;
}


export class GetProjectConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectConfigQueryParams;

  @SpeakeasyMetadata()
  security: GetProjectConfigSecurity;
}


export class GetProjectConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectConfig400ApplicationJsonObject?: Map<string, any>;
}
