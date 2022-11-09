import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsGetV2ProjectsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=country_id" })
  countryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity" })
  entity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.ProjectsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" })
  parameterId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" })
  sensorType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceName" })
  sourceName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string[];
}


export class ProjectsGetV2ProjectsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProjectsGetV2ProjectsGetQueryParams;
}


export class ProjectsGetV2ProjectsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  openAqProjectsResult?: shared.OpenAqProjectsResult;

  @Metadata()
  statusCode: number;
}
