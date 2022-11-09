import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddProjectModeEnum {
    Full = "full"
,    Sparse = "sparse"
,    Upload = "upload"
}


export class AddProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: AddProjectModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=worker-label" })
  workerLabel?: string[];
}


export class AddProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class AddProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddProjectQueryParams;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  request?: string;

  @Metadata()
  security: AddProjectSecurity;
}


export class AddProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
