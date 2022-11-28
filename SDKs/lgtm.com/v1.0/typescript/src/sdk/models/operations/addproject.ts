import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddProjectModeEnum {
    Full = "full",
    Sparse = "sparse",
    Upload = "upload"
}


export class AddProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: AddProjectModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" })
  repository: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=worker-label" })
  workerLabel?: string[];
}


export class AddProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class AddProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddProjectQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  request?: string;

  @SpeakeasyMetadata()
  security: AddProjectSecurity;
}


export class AddProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  operation?: shared.Operation;
}
