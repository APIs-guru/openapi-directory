import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsGetV2ProjectsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.ProjectsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class ProjectsGetV2ProjectsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProjectsGetV2ProjectsGetQueryParams;
}


export class ProjectsGetV2ProjectsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  openAqProjectsResult?: shared.OpenAqProjectsResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
